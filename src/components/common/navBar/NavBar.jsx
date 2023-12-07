import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Input } from "antd";
import { Menu } from "antd";
import Logo from "../logo";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import defaultTheme from "../../../theme";

const { Search } = Input;

const NavBar = () => {
  const cartItemQty = useSelector((state) => {
    return state.cart?.totalQty;
  });
  const onSearch = (value, _e, info) => console.log(info?.source, value);

  const menuItems = [
    {
      key: "logo",
      label: <Logo />,
      style: {
        alignItems: "center",
      },
      // selectable: "false",
    },
    {
      key: "search",
      label: (
        <Search
          placeholder="Search Item"
          onSearch={onSearch}
          enterButton
          style={{ width: 250 }}
        />
      ),
      style: {
        alignItems: "center",
      },
    },
    {
      key: "signIn",
      label: <Link to={"/sign-in"}>SIGN IN</Link>,
      style: {
        alignItems: "center",
      },
    },
    { key: "register", label: <Link to={"/register"}>REGISTER</Link> },
    {
      key: "cart",
      label: (
        <Link to={"/cart"}>
          <Badge
            count={cartItemQty}
            size="small"
            color={defaultTheme.colors.yellow}
            style={{ color: defaultTheme.colors.black, fontWeight: "700" }}
          >
            <ShoppingCartOutlined
              style={{ fontSize: "1.4rem", color: "white" }}
            />
          </Badge>
        </Link>
      ),
      style: {
        alignItems: "center",
      },
    },
  ];

  return (
    <nav>
      <Menu
        mode="horizontal"
        items={menuItems}
        style={{ display: "flex" }}
        // theme="dark"
      ></Menu>
    </nav>
  );
};

export default NavBar;
