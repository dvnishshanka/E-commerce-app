import { useParams } from 'react-router-dom';
import { Rate } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../../../actions';
import { calFinalPrice, findItemFromID, formatPrice, getOrderedItemQty } from '../../../utils';
import WavesOutlinedIcon from '@mui/icons-material/WavesOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import BtnAddCart from '../../common/btnAddCart';
import QtyChanger from '../../common/qtyChanger';
import {
  Container,
  ItemInfo,
  Title,
  Price,
  Description,
  Rating,
  RatingCount,
  DeliveryInfoRow,
  FastDeliveryIcon,
  Image,
  OriginalPrice,
  DiscountedPrice,
  DeliveryInfo,
  OriginalPriceWrapper,
} from './styles';
import DiscountTag from '../../discountTag';

const ItemPage = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  const { id } = useParams();

  const itemDetails = findItemFromID(id, items);

  const noOfItems = useSelector((state) => {
    return getOrderedItemQty(id, state.cart.cartItems);
  });

  const addToCartHandler = () => {
    dispatch({ type: ADD_TO_CART, item: findItemFromID(id, items) });
  };

  const removeFromCartHandler = () => {
    dispatch({ type: REMOVE_FROM_CART, item: findItemFromID(id, items) });
  };

  return (
    <Container>
      <Image src={itemDetails?.image} alt={itemDetails?.title} />
      <ItemInfo>
        <Title>{itemDetails.title}</Title>
        <Description>{itemDetails.description}</Description>
        {itemDetails.discountRate > 0 ? (
          <>
            <DiscountedPrice>
              {formatPrice(calFinalPrice(itemDetails.price, itemDetails.discountRate))}
            </DiscountedPrice>
            <OriginalPriceWrapper>
              Originally:
              <OriginalPrice>{formatPrice(
                itemDetails.price)}
                 <DiscountTag description={`${itemDetails.discountRate}% OFF`}/>
              </OriginalPrice>
            </OriginalPriceWrapper>
          </>
        ) : (
          <Price>{formatPrice(itemDetails.price)}</Price>
        )}
        <Rating>
          <Rate disabled allowHalf defaultValue={itemDetails.rating.rate} />
          <RatingCount>{`(${itemDetails.rating.count}) reviews`}</RatingCount>
        </Rating>
        {noOfItems > 0 ? (
          <QtyChanger
            removeFromCartHandler={removeFromCartHandler}
            addToCartHandler={addToCartHandler}
            noOfItems={noOfItems}
          />
        ) : (
          <BtnAddCart addToCartHandler={addToCartHandler} />
        )}
        <DeliveryInfo>
          <FastDeliveryIcon>
            <WavesOutlinedIcon />
            <LocalShippingOutlinedIcon />
          </FastDeliveryIcon>
          <DeliveryInfoRow>
            <div>1-3 working days</div>
            <div>{formatPrice(itemDetails?.deliveryCharge)}</div>
          </DeliveryInfoRow>
          <p>Premium Delivery</p>
        </DeliveryInfo>
        <DeliveryInfo>
          <LocalShippingOutlinedIcon />
          <DeliveryInfoRow>
            <div>4-7 working days</div>
            <div>free</div>
          </DeliveryInfoRow>
          <p>Standard Delivery</p>
        </DeliveryInfo>
      </ItemInfo>
    </Container>
  );
};

export default ItemPage;
