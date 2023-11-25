import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Input } from "antd";
import { Menu } from "antd";
import { Logo } from "./styles";
import { Link } from "react-router-dom";

const { Search } = Input;

const NavBar = () => {
  const onSearch = (value, _e, info) => console.log(info?.source, value);

  const menuItems = [
    {
      key: "logo",
      label: <Logo>Bag Boutique.</Logo>,
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
      label: "SIGN IN",
      style: {
        alignItems: "center",
      },
    },
    { key: "register", label: <Link to={"/register"}>REGISTER</Link> },
    {
      key: "cart",
      icon: (
        <Badge count={4} size="small" color="blue">
          <ShoppingCartOutlined style={{ fontSize: "1.4rem" }} />
        </Badge>
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
        theme="dark"
      ></Menu>
    </nav>
  );
};

export default NavBar;
