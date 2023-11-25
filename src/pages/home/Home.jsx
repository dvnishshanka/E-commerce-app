import Banner from "../../components/Banner";
import Item from "../../components/item";
import { useEffect, useState } from "react";
import axios from "axios";
import { BannerImgWrapper, ItemsWrapper } from "./styles";

const Home = ({ addToCart }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <BannerImgWrapper>
        <Banner />
      </BannerImgWrapper>
      <ItemsWrapper>
        {items.map((item) => {
          return (
            <Item
              addToCart={addToCart}
              key={item.id}
              id={item.id}
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
