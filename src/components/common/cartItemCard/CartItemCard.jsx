import { Card } from "antd";
// import { ItemDescription, Image } from "./styles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART, REMOVE_FROM_CART } from "./../../../actions/ActionTypes";
import { findItemFromID, getOrderedItemQty } from "../../../utils";
import BtnAddCart from "../btnAddCart";
import QtyChanger from "../qtyChanger";

import styled from "styled-components";
import defaultTheme from "../../../theme";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;

export const ItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 80%;
  bottom: 5%;
`;

const CartItemCard = ({ item, itemList }) => {
  const dispatch = useDispatch();

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
        width: "60vw",
        borderRadius: 0,
        backgroundColor: `${defaultTheme.colors.white}`,
      }}
    >
      <Wrapper>
        <Link
          to={`/items/${item?.id}`}
          style={{ maxWidth: "20%", maxHeight: "100%", marginRight: "30px" }}
        >
          <Image src={item?.image} alt={item?.title} />
        </Link>
        <ItemDescription>
          {item.title && <h4>{item.title}</h4>}
          {item.category && <p style={{ margin: 0 }}>{item.category}</p>}
          {item.price && (
            <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
              {`€ ${Number(item.price).toFixed(2)}`} / item
            </p>
          )}
          {noOfItems > 0 ? (
            <QtyChanger
              removeFromCartHandler={removeFromCartHandler}
              addToCartHandler={addToCartHandler}
              noOfItems={noOfItems}
              style={{ width: "200px" }}
            />
          ) : (
            <BtnAddCart
              addToCartHandler={addToCartHandler}
              style={{ width: "50%" }}
            />
          )}
        </ItemDescription>
      </Wrapper>
    </Card>
  );
};

export default CartItemCard;
