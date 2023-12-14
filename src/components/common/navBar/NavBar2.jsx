import { message } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { SIGNED_OUT_SUCCESSFULLY, SOMETHING_WENT_WRONG } from '../../../constants/AppConstants';
import { signOut } from 'firebase/auth';
import { auth } from '../../../auth';
import { NavBarWrapper } from './styles2';
import AppMenu from './AppMenu';
import AppSubMenu from './AppSubMenu';
import { useNavigate } from 'react-router-dom';
import { CLEAR_CART } from '../../../actions';

const NavBar = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const items = useSelector((state) => state.items);
  const allCategories = [...new Set(items.map((item) => item.category))];
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
        navigate('/');
        dispatch({ type: CLEAR_CART, action: null });
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
      <AppMenu userDetails={userDetails} signOutUser={signOutUser} />
      <AppSubMenu allCategories={allCategories} />
    </NavBarWrapper>
  );
};

export default NavBar;
