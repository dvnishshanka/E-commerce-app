import Banner from '../../common/banner';
import { useParams } from 'react-router-dom';
import { ItemsWrapper } from './style';
import { useSelector } from 'react-redux';
import Item from '../../common/itemCard';
import { filterItems, filterSaleItems } from '../../../utils';
import { bannerData } from '../../../assets/db/BannerData';

const CategoryPage = () => {
  const items = useSelector((state) => state.items);
  const { category } = useParams();

  const filteredItems =
    category === 'sale' ? filterSaleItems(items) : filterItems(items, 'category', category);

  return (
    <div>
      <Banner bannerData={bannerData[category] || bannerData.default} showBtn={false} />
      <h2>{category}</h2>
      <ItemsWrapper>
        {filteredItems.map((item) => {
          return <Item items={items} key={item.id} itemDetails={item} />;
        })}
      </ItemsWrapper>
    </div>
  );
};

export default CategoryPage;
