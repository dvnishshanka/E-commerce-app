import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import defaultTheme from '../../../theme';

export const AppSubMenu = ({ allCategories }) => {
  const navigate = useNavigate();
  const { Item } = Menu;

  return (
    <Menu mode="horizontal" style={{ width: '100%' }}>
      {allCategories.map((category, index) => {
        return (
          <Item
            key={index}
            onClick={() => {
              navigate(`/${category}`);
            }}
          >
            {category}
          </Item>
        );
      })}
      <Item
        key={'sale'}
        onClick={() => {
          navigate(`/sale`);
        }}
        style={{ color: `${defaultTheme.colors.red}`, fontWeight: 'bolder' }}
      >
        Sale %
      </Item>
    </Menu>
  );
};

export default AppSubMenu;
