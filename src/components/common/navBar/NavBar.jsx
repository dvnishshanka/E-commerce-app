import { ShoppingCartOutlined } from '@ant-design/icons';
import { Badge, message } from 'antd';
import Logo from '../logo';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import defaultTheme from '../../../theme';
import { SIGNED_OUT_SUCCESSFULLY, SOMETHING_WENT_WRONG } from '../../../constants/AppConstants';
import { signOut } from 'firebase/auth';
import { auth } from '../../../auth';
import { NavElements, Container, NavBarWrapper } from './styles';

const NavBar = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const items = useSelector((state) => state.items);
  const allCategories = [...new Set(items.map((item) => item.category))];

  const cartItemQty = useSelector((state) => {
    return state.cart?.totalQty;
  });

  const userDetails = useSelector((state) => {
    return state.auth;
  });

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        messageApi.open({
          type: 'success',
          content: SIGNED_OUT_SUCCESSFULLY,
        });
      })
      .catch((error) => {
        console.log(error);
        messageApi.open({
          type: 'error',
          content: SOMETHING_WENT_WRONG,
        });
      });
  };

  return (
    <NavBarWrapper>
      {contextHolder}
      <Container>
        <div>
          <NavLink to={'/'} style={{ textDecoration: 'none' }}>
            <Logo />
          </NavLink>
        </div>
        <div>
          <NavElements>
            {!userDetails && (
              <li>
                <NavLink to={'/sign-in'}>Sign in</NavLink>
              </li>
            )}
            {userDetails && (
              <li>
                <div role="button" onClick={signOutUser} style={{ cursor: 'pointer' }}>
                  Sign out
                </div>
              </li>
            )}
            <li>
              <NavLink to={'/register'}>Register</NavLink>
            </li>
            <li>
              <NavLink to={'/cart'}>
                <Badge
                  count={cartItemQty}
                  size="small"
                  color={defaultTheme.colors.yellow}
                  style={{
                    color: defaultTheme.colors.black,
                    fontWeight: '700',
                  }}
                >
                  <ShoppingCartOutlined style={{ fontSize: '1.4rem' }} />
                </Badge>
              </NavLink>
            </li>
          </NavElements>
        </div>
      </Container>
      <Container>
        <div>
          <NavElements>
            {allCategories.map((category, index) => {
              return (
                <li key={index}>
                  <NavLink to={`/${category}`}>{category}</NavLink>
                </li>
              );
            })}
          </NavElements>
        </div>
      </Container>
    </NavBarWrapper>
  );
};

export default NavBar;
