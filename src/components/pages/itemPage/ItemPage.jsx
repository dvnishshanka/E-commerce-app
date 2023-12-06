import { useParams } from "react-router-dom";
import { Rate } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../../../actions";
import { findItemFromID, getOrderedItemQty } from "../../../utils";
import WavesOutlinedIcon from "@mui/icons-material/WavesOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import BtnAddCart from "../../common/btnAddCart";
import QtyChanger from "../../common/qtyChanger";

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px;
`;
export const Image = styled.img`
  width: 40%;
`;

export const ItemInfo = styled.div`
  width: 40%;
  padding: 40px;
`;

export const Title = styled.h2``;

export const Description = styled.div``;

export const Price = styled.h3``;

export const Rating = styled.div`
  display: flex;
  align-items: center;
`;

export const RatingCount = styled.p`
  margin-left: 10px;
  color: grey;
`;

export const DeliveryInfo = styled.div`
  margin-top: 30px;
`;

export const DeliveryInfoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
`;

export const FastDeliveryIcon = styled.span`
  display: "flex";
  align-items: "center";
`;

const ItemPage = ({ items }) => {
  const dispatch = useDispatch();
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
      <Image src={itemDetails.image} alt={itemDetails.title} />
      <ItemInfo>
        <Title>{itemDetails.title}</Title>
        <Description>{itemDetails.description}</Description>
        <Price>{`€ ${Number(itemDetails.price).toFixed(2)}`}</Price>
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
            <div>1-2 working days</div>
            <div>{`€ ${Number(5).toFixed(2)}`}</div>
          </DeliveryInfoRow>
          <p>Premium Delivery</p>
        </DeliveryInfo>
        <DeliveryInfo>
          <LocalShippingOutlinedIcon />
          <DeliveryInfoRow>
            <div>3-6 working days</div>
            <div>free</div>
          </DeliveryInfoRow>
          <p>Standard Delivery</p>
        </DeliveryInfo>
      </ItemInfo>
    </Container>
  );
};

export default ItemPage;
