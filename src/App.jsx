import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";
import RootPage from "./components/pages/Root";
import HomePage from "./components/pages/home";
import ItemPage from "./components/pages/itemPage";
import ErrorPage from "./components/pages/Error";
import axios from "axios";
import { findItemFromID } from "./utils";
import SignIn from "./components/pages/signIn";
import SignUp from "./components/pages/signUp";
import Cart from "./components/pages/cart/index";

function App() {
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState([]);

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

  const addToCart = (id) => {
    const addedItem = findItemFromID(id, items);
    addedItem?.quantity
      ? (addedItem.quantity = addedItem.quantity + 1)
      : (addedItem.quantity = 0);
    console.log("added item", addedItem);
    setCart((prevState) => {
      // Check whether the item selected is already in the cart
      const selectedItem = findItemFromID(id, cart);
      // if (selectedItem)
      //   return [...prevState, prevState]
      return [...prevState, { addedItem }];
    });
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage items={items} addToCart={addToCart} />,
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

  useEffect(() => {
    // console.log(cart);
  }, [cart]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
