import { ShoppingCartOutlined } from "@ant-design/icons";
import { PrimaryBtn } from "../button";

const BtnAddCart = ({ addToCartHandler }) => {
  return (
    <PrimaryBtn
      type="primary"
      icon={<ShoppingCartOutlined />}
      onClick={addToCartHandler}
      style={{ width: "100%" }}
    >
      Add to Cart
    </PrimaryBtn>
  );
};

export default BtnAddCart;
