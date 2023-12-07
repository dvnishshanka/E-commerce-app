import { Carousel } from "antd";
import Banner from "../../common/banner";
import Item from "../../common/itemCard";
import { ItemsWrapper } from "./styles";
import { bannerData } from "./BannerData";

const Home = ({ items }) => {
  return (
    <>
      <Carousel
      // autoplay
      // autoplaySpeed={3000}
      // speed={600}
      >
        {bannerData.map((el, index) => {
          return <Banner key={index} bannerData={el} />;
        })}
      </Carousel>
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
