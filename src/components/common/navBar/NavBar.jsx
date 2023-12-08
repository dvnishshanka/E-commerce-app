import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Input, message } from "antd";
import { Menu } from "antd";
import Logo from "../logo";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import defaultTheme from "../../../theme";
import {
  SIGNED_OUT_SUCCESSFULLY,
  SOMETHING_WENT_WRONG,
} from "../../../constants/AppConstants";
import { signOut } from "firebase/auth";
import { auth } from "../../../auth";

const { Search } = Input;

const NavBar = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const cartItemQty = useSelector((state) => {
    return state.cart?.totalQty;
  });

  const userDetails = useSelector((state) => {
    return state.auth;
  });

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        messageApi.open({
          type: "success",
          content: SIGNED_OUT_SUCCESSFULLY,
        });
      })
      .catch((error) => {
        console.log(error);
        messageApi.open({
          type: "error",
          content: SOMETHING_WENT_WRONG,
        });
      });
  };

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
      key: "name",
      label: `${userDetails?.email} Hi`,
      style: {
        alignItems: "center",
      },
      // selectable: "false",
    },
    {
      key: "signIn",
      label: <Link to={"/sign-in"}>SIGN IN</Link>,
      style: {
        alignItems: "center",
      },
    },
    {
      key: "signOut",
      label: (
        <div role="button" onClick={signOutUser}>
          SIGN OUT
        </div>
      ),
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
            <ShoppingCartOutlined style={{ fontSize: "1.4rem" }} />
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
      {contextHolder}
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
