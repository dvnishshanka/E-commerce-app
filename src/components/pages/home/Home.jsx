import { Carousel } from "antd";
import Banner from "../../common/banner";
import Item from "../../common/itemCard";
import { ItemsWrapper } from "./styles";
import { bannerData } from "./BannerData";

const Home = ({ items }) => {
  return (
    <>
      <Carousel autoplay speed={500}>
        {bannerData.map((el, index) => {
          return <Banner key={index} bannerData={el} />;
        })}
      </Carousel>

      <ItemsWrapper>
        {items.map((item) => {
          return <Item items={items} key={item.id} itemDetails={item} />;
        })}
      </ItemsWrapper>
    </>
  );
};

export default Home;
