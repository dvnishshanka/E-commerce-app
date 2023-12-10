import defaultTheme from "../../../theme";
import { Logo } from "./styles";
import { ShoppingTwoTone } from "@ant-design/icons";

const CompanyLogo = () => {
  return (
    <Logo>
      <ShoppingTwoTone twoToneColor={defaultTheme.colors.yellow} />
      FlexiCart
    </Logo>
  );
};

export default CompanyLogo;
