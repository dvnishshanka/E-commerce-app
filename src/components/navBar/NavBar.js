import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
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
        <SearchBar>
          <Input placeholder="Search" />
          <SearchIcon style={{ color: "gray" }} />
        </SearchBar>
      </LeftWrapper>
      <CenterWrapper>
        <Logo>Bag Boutique.</Logo>
      </CenterWrapper>
      <RightWrapper>
        <NavItem>SIGN IN</NavItem>
        <NavItem>REGISTER</NavItem>
        <NavItem>
          <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlinedIcon color="action" />
          </Badge>
        </NavItem>
      </RightWrapper>
    </NavContainer>
  );
};

export default NavBar;
