import { Container } from "./styles";
import { Button } from "antd";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";

const QtyChanger = ({ removeFromCartHandler, addToCartHandler, noOfItems }) => {
  return (
    <Container>
      <Button
        type="primary"
        shape="circle"
        icon={<MinusCircleOutlined />}
        onClick={removeFromCartHandler}
      />
      <p
        style={{
          fontWeight: "bold",
        }}
      >
        {noOfItems} Nos
      </p>
      <Button
        type="primary"
        shape="circle"
        icon={<PlusCircleOutlined />}
        onClick={addToCartHandler}
      />
    </Container>
  );
};

export default QtyChanger;
