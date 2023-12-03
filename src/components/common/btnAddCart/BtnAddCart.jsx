import { Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

const BtnAddCart = ({ addToCartHandler }) => {
  return (
    <Button
      type="primary"
      icon={<ShoppingCartOutlined />}
      shape="round"
      onClick={addToCartHandler}
      // style={}
    >
      Add to Cart
    </Button>
  );
};

export default BtnAddCart;
