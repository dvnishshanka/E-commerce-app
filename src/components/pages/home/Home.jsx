import Banner from "../../common/Banner";
import Item from "../../common/itemCard";
import { BannerImgWrapper, ItemsWrapper } from "./styles";

const Home = ({ items }) => {
  return (
    <>
      <BannerImgWrapper>
        <Banner />
      </BannerImgWrapper>
      <ItemsWrapper>
        {items.map((item) => {
          return (
            <Item
              items={items}
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
