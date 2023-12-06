import { Container } from "./styles";
import {
  PlusOutlined,
  ShoppingCartOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import { PrimaryBtn } from "../button";

const QtyChanger = ({ removeFromCartHandler, addToCartHandler, noOfItems }) => {
  return (
    <Container>
      <PrimaryBtn
        type="primary"
        icon={<MinusOutlined />}
        onClick={removeFromCartHandler}
      />
      <p
        style={{
          fontWeight: "bold",
        }}
      >
        {noOfItems} Nos in{" "}
        <ShoppingCartOutlined style={{ fontSize: "1.2rem" }} />
      </p>
      <PrimaryBtn
        type="primary"
        icon={<PlusOutlined />}
        onClick={addToCartHandler}
      />
    </Container>
  );
};

export default QtyChanger;
