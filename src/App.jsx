import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';
import RootPage from './components/pages/Root';
import HomePage from './components/pages/home';
import ItemPage from './components/pages/itemPage';
import ErrorPage from './components/pages/Error';
import SignIn from './components/pages/signIn';
import SignUp from './components/pages/signUp';
import Cart from './components/pages/cart/index';
import { auth } from './auth/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { ADD_USER_DATA, fetchAllItems, REMOVE_USER_DATA } from './actions';
import CategoryPage from './components/pages/categoryPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllItems());
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const serializedUserData = { uid: user.uid, email: user.email };
        dispatch({ type: ADD_USER_DATA, userDetails: serializedUserData });
      } else {
        dispatch({ type: REMOVE_USER_DATA, userDetails: null });
      }
    });
  }, [dispatch]);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/:category',
          element: <CategoryPage />,
        },
        {
          path: '/items/:id',
          element: <ItemPage />,
        },
        {
          path: '/sign-in',
          element: <SignIn />,
        },
        {
          path: '/register',
          element: <SignUp />,
        },
        {
          path: '/cart',
          element: <Cart />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
