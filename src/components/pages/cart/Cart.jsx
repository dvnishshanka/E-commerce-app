import { useSelector } from "react-redux";

import styled from "styled-components";
import defaultTheme from "./../../../theme/index";
import { PrimaryBtn } from "../../common/button";
import { LABEL_GO_TO_CHECKOUT } from "../../../constants/AppConstants";
import CartItemCard from "../../common/cartItemCard";

export const CartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${defaultTheme.colors.lightGray};
`;

export const CartItemsWrapper = styled.div`
  background-color: ${defaultTheme.colors.white};
  width: fit-content;
  border-radius: 2px;
  margin-left: 20px;
  padding: 10px 10px;
`;

export const CartSummary = styled.div`
  background-color: ${defaultTheme.colors.white};
  padding: 10px 10px;
  margin-right: 20px;
  border-radius: 2px;
`;

export const SummaryLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    padding-right: 30px;
  }
`;

const Cart = ({ items }) => {
  const cartData = useSelector((state) => {
    return state?.cart;
  });

  return (
    <CartContainer>
      <CartItemsWrapper>
        <h2>
          Your cart ({cartData.totalQty}
          {cartData.totalQty === 1 ? " item" : " items"})
        </h2>
        {cartData?.cartItems.map((item, index) => {
          return (
            <CartItemCard
              key={index}
              item={item}
              itemList={items}
            ></CartItemCard>
          );
        })}
      </CartItemsWrapper>
      <CartSummary>
        <h2>Total</h2>
        <SummaryLine>
          <p>Sub Total</p>
          <p>{`${Number(cartData.totalPrice).toFixed(2)} €`}</p>
        </SummaryLine>
        <SummaryLine>
          <p>Delivery</p>
          <p>{`${Number(5).toFixed(2)} €`}</p>
        </SummaryLine>
        <SummaryLine style={{ fontWeight: "bold" }}>
          <p>Total (VAT included)</p>
          <p>{`${Number(cartData.totalPrice + 2).toFixed(2)} €`}</p>
        </SummaryLine>
        <PrimaryBtn
          style={{
            backgroundColor: defaultTheme.colors.yellow,
            color: defaultTheme.colors.black,
          }}
        >
          {LABEL_GO_TO_CHECKOUT}
        </PrimaryBtn>
      </CartSummary>
    </CartContainer>
  );
};

export default Cart;
