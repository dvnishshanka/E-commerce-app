import { Card } from 'antd';
import {
  ItemDescription,
  Image,
  Wrapper,
  OriginalPrice,
  OriginalPriceWrapper,
  DiscountedPrice,
  Price,
  ImageWrapper,
  BtnContainer,
} from './styles';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_CART, REMOVE_FROM_CART } from './../../../actions/ActionTypes';
import { calFinalPrice, findItemFromID, formatPrice, getOrderedItemQty } from '../../../utils';
import BtnAddCart from '../btnAddCart';
import QtyChanger from '../qtyChanger';
import defaultTheme from '../../../theme';
import DiscountTag from '../../discountTag';

const CartItemCard = ({ item }) => {
  const dispatch = useDispatch();
  const itemList = useSelector((state) => state.items);

  const noOfItems = useSelector((state) => {
    return getOrderedItemQty(item.id, state.cart.cartItems);
  });

  const addToCartHandler = () => {
    dispatch({ type: ADD_TO_CART, item: findItemFromID(item.id, itemList) });
  };

  const removeFromCartHandler = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      item: findItemFromID(item.id, itemList),
    });
  };

  return (
    <Card
      style={{
        width: '60vw',
        borderRadius: 0,
        backgroundColor: `${defaultTheme.colors.white}`,
      }}
    >
      <Wrapper>
        <ImageWrapper>
          <Link to={`/items/${item?.id}`}>
            <Image src={item?.image} alt={item?.title} />
          </Link>
        </ImageWrapper>
        <ItemDescription>
          {item.title && <h4>{item.title}</h4>}
          {item.category && <p style={{ margin: 0 }}>{item.category}</p>}
          {item.discountRate > 0 ? (
            <>
              <DiscountedPrice>
                {formatPrice(calFinalPrice(item.price, item.discountRate))} / item
              </DiscountedPrice>
              <OriginalPriceWrapper>
                Originally:
                <OriginalPrice>
                  {formatPrice(item.price)}
                  <DiscountTag description={`${item.discountRate}% OFF`} />
                </OriginalPrice>
              </OriginalPriceWrapper>
            </>
          ) : (
            <Price>{formatPrice(item.price)} / item</Price>
          )}
        </ItemDescription>
        <BtnContainer>
          {noOfItems > 0 ? (
            <QtyChanger
              removeFromCartHandler={removeFromCartHandler}
              addToCartHandler={addToCartHandler}
              noOfItems={noOfItems}
            />
          ) : (
            <BtnAddCart addToCartHandler={addToCartHandler} />
          )}
        </BtnContainer>
      </Wrapper>
    </Card>
  );
};

export default CartItemCard;
