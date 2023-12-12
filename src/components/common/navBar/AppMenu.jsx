import { Menu, Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import defaultTheme from '../../../theme';
import Logo from '../logo';

const AppMenu = ({ userDetails, signOutUser }) => {
  const navigate = useNavigate();
  const { Item } = Menu;
  const cartItemQty = useSelector((state) => {
    return state.cart?.totalQty;
  });

  return (
    <Menu mode="horizontal" style={{ width: '100%' }}>
      <Item
        style={{ textDecoration: 'none' }}
        key="logo"
        onClick={() => {
          navigate('/');
        }}
      >
        <Logo style={{ textDecoration: 'none' }} />
      </Item>
      {userDetails ? (
        <Item key="sign-out" onClick={signOutUser}>
          Sign out
        </Item>
      ) : (
        <>
          <Item
            key="sign-in"
            onClick={() => {
              navigate('/sign-in');
            }}
          >
            Sign in
          </Item>
          <Item
            key="register"
            onClick={() => {
              navigate('/register');
            }}
          >
            Register
          </Item>
        </>
      )}
      <Item key="cart" onClick={() => navigate('/cart')}>
        <Badge count={cartItemQty} size="small" color={defaultTheme.colors.yellow}>
          <ShoppingCartOutlined style={{ fontSize: '1.4rem' }} />
        </Badge>
      </Item>
    </Menu>
  );
};

export default AppMenu;
