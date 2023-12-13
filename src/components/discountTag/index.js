import { Tag } from 'antd';
import defaultTheme from '../../theme';

const DiscountTag = ({ description }) => {
  return (
    <Tag color={defaultTheme.colors.red} style={{ fontWeight: 'bold', marginLeft: '10px' }}>
      {description}
    </Tag>
  );
};

export default DiscountTag;
