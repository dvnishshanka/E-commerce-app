import { useSelector } from 'react-redux';
import { CartContainer, CartItemsWrapper, CartSummary, SummaryLine } from './styles';
import { PrimaryBtn, SecondaryBtn } from '../../common/button';
import { LABEL_GO_TO_CHECKOUT } from '../../../constants/AppConstants';
import CartItemCard from '../../common/cartItemCard';
import defaultTheme from './../../../theme/index';
import { Modal } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { calTotalDeliveryCharge } from '../../../utils';

const Cart = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const cartData = useSelector((state) => state?.cart);
  const auth = useSelector((state) => state.auth);
  const totalDeliveryCharge = calTotalDeliveryCharge(cartData.cartItems);

  const checkoutHandler = () => {
    if (!auth) {
      setShowModal(true);
    }
  };

  return (
    <>
      <Modal
        title="Sign in Required"
        open={showModal}
        onCancel={() => {
          setShowModal(false);
        }}
        footer={[
          <SecondaryBtn
            key="register"
            onClick={() => {
              navigate('/register');
            }}
          >
            Register
          </SecondaryBtn>,
          <PrimaryBtn
            key="sign-in"
            onClick={() => {
              navigate('/sign-in');
            }}
          >
            Sign in
          </PrimaryBtn>,
        ]}
      >
        Please login to proceed with the checkout.
      </Modal>
      {cartData?.totalQty === 0 ? (
        <CartContainer>
          <h2>Your shopping cart is empty</h2>
        </CartContainer>
      ) : (
        cartData?.totalQty > 0 && (
          <CartContainer>
            <CartItemsWrapper>
              <h2>
                Your cart ({cartData.totalQty}
                {cartData.totalQty === 1 ? ' item' : ' items'})
              </h2>
              {cartData?.cartItems.map((item, index) => {
                return <CartItemCard key={index} item={item}></CartItemCard>;
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
                <p>{`${Number(totalDeliveryCharge).toFixed(2)} €`}</p>
              </SummaryLine>
              <SummaryLine style={{ fontWeight: 'bold' }}>
                <p>Total (VAT included)</p>
                <p>{`${Number(cartData.totalPrice + totalDeliveryCharge).toFixed(2)} €`}</p>
              </SummaryLine>
              <PrimaryBtn
                style={{
                  backgroundColor: defaultTheme.colors.yellow,
                  color: defaultTheme.colors.black,
                }}
                onClick={checkoutHandler}
              >
                {LABEL_GO_TO_CHECKOUT}
              </PrimaryBtn>
            </CartSummary>
          </CartContainer>
        )
      )}
    </>
  );
};

export default Cart;
