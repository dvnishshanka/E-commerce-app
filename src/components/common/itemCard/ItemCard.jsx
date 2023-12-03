import {
  ShoppingCartOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import { Button, Card } from "antd";
import { ItemDescription, Image, QtyChanger } from "./styles";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ADD_TO_CART } from "./../../../actions/ActionTypes";
import { findItemFromID } from "../../../utils";

const ItemCard = ({
  items,
  title,
  id,
  description,
  price,
  image,
  showDescription = false,
}) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch({ type: ADD_TO_CART, newItem: findItemFromID(id, items) });
  };

  return (
    <Card
      hoverable
      style={{
        width: 240,
        height: 400,
        position: "relative",
      }}
    >
      <Link to={`/items/${id}`}>
        <Image src={image} alt={title} />
      </Link>
      <ItemDescription>
        {title && <h4>{title}</h4>}
        {price && <p>{`€ ${Number(price).toFixed(2)}`}</p>}
        <Button
          type="primary"
          icon={<ShoppingCartOutlined />}
          shape="round"
          onClick={addToCartHandler}
        >
          Add to Cart
        </Button>
        <QtyChanger>
          <Button
            type="primary"
            shape="circle"
            icon={<MinusCircleOutlined />}
            onClick={addToCartHandler}
          />
          <p style={{ fontWeight: "bold", color: "white" }}>Added to cart</p>
          <Button
            type="primary"
            shape="circle"
            icon={<PlusCircleOutlined />}
            onClick={addToCartHandler}
          />
        </QtyChanger>
      </ItemDescription>
    </Card>
  );
};

export default ItemCard;
