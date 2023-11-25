import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";
import RootPage from "./pages/Root";
import HomePage from "./pages/home";
import ItemPage from "./pages/itemPage";
import ErrorPage from "./pages/Error";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (newItem) => {
    setCart((prevState) => [...prevState, newItem]);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage cart={cart} addToCart={addToCart} />,
        },
        {
          path: "/items/:id",
          element: <ItemPage />,
        },
        // {
        //   path: "/register",
        //   element: ,
        // },
      ],
    },
  ]);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
