import { useParams } from "react-router-dom";
import { Rate, Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { ADD_TO_CART } from "../../../actions";

import styled from "styled-components";
import { findItemFromID } from "../../../utils";

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

const ItemPage = ({ items }) => {
  const { id } = useParams();

  const itemDetails = findItemFromID(id, items);
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch({ type: ADD_TO_CART, newItem: findItemFromID(id, items) });
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
        <Button
          type="primary"
          icon={<ShoppingCartOutlined />}
          shape="round"
          onClick={addToCartHandler}
          // style={}
        >
          Add to Cart
        </Button>
      </ItemInfo>
    </Container>
  );
};

export default ItemPage;
