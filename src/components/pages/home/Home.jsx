import { Carousel } from 'antd';
import Banner from '../../common/banner';
import Item from '../../common/itemCard';
import { ItemsWrapper } from './styles';
import { bannerData } from './../../../assets/db/BannerData';
import { useSelector } from 'react-redux';

const Home = () => {
  const items = useSelector((state) => {
    return state.items;
  });

  return (
    <>
      <Carousel autoplay speed={500}>
        {Object.values(bannerData).map((el, index) => {
          return <Banner key={index} bannerData={el} />;
        })}
      </Carousel>

      <ItemsWrapper>
        {items.map((item) => {
          return <Item key={item.id} itemDetails={item} />;
        })}
      </ItemsWrapper>
    </>
  );
};

export default Home;
