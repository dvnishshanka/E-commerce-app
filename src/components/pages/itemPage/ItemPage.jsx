import { useParams } from 'react-router-dom';
import { Rate } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../../../actions';
import { findItemFromID, getOrderedItemQty } from '../../../utils';
import WavesOutlinedIcon from '@mui/icons-material/WavesOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import BtnAddCart from '../../common/btnAddCart';
import defaultTheme from './../../../theme/index';
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
} from './styles';

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
            <DiscountedPrice>{`€ ${Number(
              itemDetails.price * (1 - itemDetails.discountRate / 100),
            ).toFixed(2)}`}</DiscountedPrice>
            <OriginalPrice>
              Originally:
              <span style={{ textDecoration: 'line-through' }}>{` € ${Number(
                itemDetails.price,
              ).toFixed(2)}`}</span>
              <span style={{ color: `${defaultTheme.colors.black}`, fontWeight: 'bold' }}>
                {` ${itemDetails.discountRate}%`}{' '}
              </span>
            </OriginalPrice>
          </>
        ) : (
          <Price>{`€ ${Number(itemDetails.price).toFixed(2)}`}</Price>
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
            <div>{`€ ${Number(itemDetails?.deliveryCharge).toFixed(2)}`}</div>
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
