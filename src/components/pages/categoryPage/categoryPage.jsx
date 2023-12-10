import Banner from '../../common/banner';
import jewelleryBanner from '../../../assets/images/jewellery-banner.jpg';
import { useParams } from 'react-router-dom';
import { ItemsWrapper } from './style';
import { useSelector } from 'react-redux';
import Item from '../../common/itemCard';
import { filterItems } from '../../../utils';

const CategoryPage = () => {
  const items = useSelector((state) => state.items);
  const { category } = useParams();

  // Define a mapping of category names to their respective banner images
  const categoryBannerImg = {
    jewelery: jewelleryBanner,
    // Add other category images as needed
  };

  const filteredItems = filterItems(items, 'category', category);

  return (
    <div>
      <Banner
        bannerData={{
          image: categoryBannerImg.jewelery,
          name: 'jewellery and other accessories',
          title: 'Elegance Redefined',
          subTitle: 'Unlock Your Radiance',
          caption:
            'Adorn yourself in the allure of timeless elegance. Discover handcrafted jewelry that illuminates your style with every shimmering detail.',
          btnText: 'Shop now',
          bgColor: '#B9B592',
          imgColor: '#1E202F',
          txtColor: '#000000',
        }}
      />
      {category}
      <ItemsWrapper>
        {filteredItems.map((item) => {
          return <Item items={items} key={item.id} itemDetails={item} />;
        })}
      </ItemsWrapper>
    </div>
  );
};

export default CategoryPage;
