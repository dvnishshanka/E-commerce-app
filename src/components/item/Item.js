import styled from "styled-components";

const ItemCard = styled.div`
  width: 300px;
  height: 400px;
`;

const Image = styled.img`
  width: 100%;
  height: 60%;
`;

const Item = ({
  title,
  description,
  price,
  image,
  showDescription = false,
}) => {
  return (
    <ItemCard>
      {image && <Image src={image} alt={title} />}
      {title && <p>{title}</p>}
      {description && showDescription && <p>{description}</p>}
      {price && <p>{`€ ${Number(price).toFixed(2)}`}</p>}
    </ItemCard>
  );
};

export default Item;
