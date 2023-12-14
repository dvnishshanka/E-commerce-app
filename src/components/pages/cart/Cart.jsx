import { useSelector, useDispatch } from 'react-redux';
import { CartContainer, CartItemsWrapper, CartSummary, SummaryLine } from './styles';
import { PrimaryBtn, SecondaryBtn } from '../../common/button';
import { LABEL_GO_TO_CHECKOUT } from '../../../constants/AppConstants';
import CartItemCard from '../../common/cartItemCard';
import defaultTheme from './../../../theme/index';
import { Result } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { calTotalDeliveryCharge, formatPrice } from '../../../utils';
import ResultIcon from '../../../assets/images/empty-cart.png';
import CheckoutSuccessIcon from '../../../assets/images/checkout-success.png';
import LoginIcon from '../../../assets/images/login.png';
import { CLEAR_CART } from '../../../actions';

const Cart = () => {
  const [showChkoutMsg, setShowChkoutMsg] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state?.cart);
  const auth = useSelector((state) => state.auth);
  const totalDeliveryCharge = calTotalDeliveryCharge(cartData.cartItems);

  const checkoutHandler = () => {
    setShowChkoutMsg(true);
    if (auth) {
      dispatch({ type: CLEAR_CART, payload: null });
    }
  };

  return (
    <>
      {showChkoutMsg && (
        <Result
          status={!auth ? 'info' : 'success'}
          title={!auth ? 'Sign in Required' : 'Order placed successfully'}
          subTitle={
            auth
              ? 'Payment feature is currently under construction.'
              : 'Please sign in to proceed with the checkout.'
          }
          icon={
            <img
              src={!auth ? LoginIcon : CheckoutSuccessIcon}
              alt={auth ? 'Sign in' : 'Empty Cart'}
              style={{ height: '20vh' }}
            />
          }
          extra={
            auth ? (
              <PrimaryBtn type="primary" onClick={() => navigate('/')}>
                Back Home
              </PrimaryBtn>
            ) : (
              <>
                <SecondaryBtn
                  key="register"
                  onClick={() => {
                    navigate('/register');
                  }}
                >
                  Register
                </SecondaryBtn>

                <PrimaryBtn
                  key="sign-in"
                  onClick={() => {
                    navigate('/sign-in');
                  }}
                >
                  Sign in
                </PrimaryBtn>
              </>
            )
          }
        />
      )}

      {!showChkoutMsg && cartData?.totalQty === 0 ? (
        <Result
          status="info"
          title="Your shopping cart is empty!"
          icon={<img src={ResultIcon} alt="Empty Cart" style={{ height: '20vh' }} />}
          extra={
            <PrimaryBtn type="primary" onClick={() => navigate('/')}>
              Back Home
            </PrimaryBtn>
          }
        />
      ) : (
        !showChkoutMsg &&
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
              <h2>Order Summary</h2>
              <SummaryLine>
                <p>Sub Total</p>
                <p>{formatPrice(cartData.totalPrice, false)}</p>
              </SummaryLine>
              <SummaryLine>
                <p>Delivery</p>
                <p>{formatPrice(totalDeliveryCharge, false)}</p>
              </SummaryLine>
              <SummaryLine style={{ fontWeight: 'bold' }}>
                <p>Total (VAT included)</p>
                <p>{formatPrice(cartData.totalPrice + totalDeliveryCharge, false)}</p>
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
