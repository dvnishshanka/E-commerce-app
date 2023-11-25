import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import { ItemDescription, Image } from "./styles";
import { Link } from "react-router-dom";

const Item = ({
  addToCart,
  title,
  id,
  description,
  price,
  image,
  showDescription = false,
}) => {
  const addToCartHandler = () => {
    addToCart({ title, price });
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
      </ItemDescription>
    </Card>
  );
};

export default Item;
