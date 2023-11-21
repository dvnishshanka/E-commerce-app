import NavBar from "../../components/navBar/NavBar";
import Banner from "../../components/Banner";
import Item from "../../components/item/Item";
import { useEffect, useState } from "react";
import axios from "axios";
import { ItemsWrapper } from "./styles";

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response.data);
        setItems(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <NavBar />
      <Banner />
      <ItemsWrapper>
        {items.map((item) => {
          return (
            <Item
              key={item.id}
              title={item.title}
              price={item.price}
              description={item.description}
              image={item.image}
            />
          );
        })}
      </ItemsWrapper>
    </>
  );
};

export default Home;
