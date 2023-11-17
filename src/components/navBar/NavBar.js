import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import {
  NavContainer,
  LeftWrapper,
  RightWrapper,
  CenterWrapper,
  SearchBar,
  NavItem,
  Logo,
  Input,
} from "./styles";

const NavBar = () => {
  return (
    <NavContainer>
      <LeftWrapper>
        <NavItem>EN</NavItem>
        <NavItem>
          <SearchBar>
            <Input placeholder="Search" />
            <SearchIcon style={{ color: "gray" }} />
          </SearchBar>
        </NavItem>
      </LeftWrapper>
      <CenterWrapper>
        <Logo>Bag Boutique.</Logo>
      </CenterWrapper>
      <RightWrapper>
        <NavItem>SIGN IN</NavItem>
        <NavItem>REGISTER</NavItem>
        <NavItem>
          <ShoppingCartOutlinedIcon />
        </NavItem>
      </RightWrapper>
    </NavContainer>
  );
};

export default NavBar;
