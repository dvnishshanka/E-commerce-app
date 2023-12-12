import defaultTheme from '../../../theme';
import { Logo } from './styles';
import { ShoppingTwoTone } from '@ant-design/icons';

const CompanyLogo = () => {
  return (
    <Logo>
      <ShoppingTwoTone twoToneColor={defaultTheme.colors.yellow} style={{ fontSize: '1.6rem' }} />
      FlexiCart
    </Logo>
  );
};

export default CompanyLogo;
