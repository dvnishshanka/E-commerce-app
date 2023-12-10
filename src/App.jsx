import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";
import RootPage from "./components/pages/Root";
import HomePage from "./components/pages/home";
import ItemPage from "./components/pages/itemPage";
import ErrorPage from "./components/pages/Error";
import axios from "axios";
import SignIn from "./components/pages/signIn";
import SignUp from "./components/pages/signUp";
import Cart from "./components/pages/cart/index";
import { auth } from "./auth/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { ADD_USER_DATA, REMOVE_USER_DATA } from "./actions";
import CategoryPage from "./components/pages/categoryPage";
import { items } from "./assets/db/items";

function App() {
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const serializedUserData = { uid: user.uid, email: user.email };
        dispatch({ type: ADD_USER_DATA, userDetails: serializedUserData });
      } else {
        dispatch({ type: REMOVE_USER_DATA, userDetails: null });
      }
    });
  }, [dispatch]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setItems(response.data);
        // console.error(items);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage items={items} />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage items={items} />,
        },
        {
          path: "/:category",
          element: <CategoryPage items={items} />,
        },
        {
          path: "/items/:id",
          element: <ItemPage items={items} />,
        },
        {
          path: "/sign-in",
          element: <SignIn />,
        },
        {
          path: "/register",
          element: <SignUp />,
        },
        {
          path: "/cart",
          element: <Cart items={items} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
