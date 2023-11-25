import { useParams } from "react-router-dom";

const ItemPage = () => {
  const { id } = useParams();

  return <p>Item Page {id}</p>;
};

export default ItemPage;
