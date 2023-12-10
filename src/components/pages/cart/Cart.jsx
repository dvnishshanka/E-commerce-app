import { useSelector } from "react-redux";
import {
  CartContainer,
  CartItemsWrapper,
  CartSummary,
  SummaryLine,
} from "./styles";
import { PrimaryBtn } from "../../common/button";
import { LABEL_GO_TO_CHECKOUT } from "../../../constants/AppConstants";
import CartItemCard from "../../common/cartItemCard";
import defaultTheme from "./../../../theme/index";

const Cart = ({ items }) => {
  const cartData = useSelector((state) => {
    return state?.cart;
  });

  return (
    <>
      {cartData?.totalQty === 0 && (
        <CartContainer>
          <h2>Your shopping cart is empty</h2>
        </CartContainer>
      )}
      {cartData?.totalQty > 0 && (
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
              <p>{`${Number(cartData.totalPrice + 5).toFixed(2)} €`}</p>
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
      )}
    </>
  );
};

export default Cart;
