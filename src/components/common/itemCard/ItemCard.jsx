import { Card } from 'antd';
import { ItemDescription, Image } from './styles';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_CART, REMOVE_FROM_CART } from './../../../actions/ActionTypes';
import { findItemFromID, getOrderedItemQty } from '../../../utils';
import BtnAddCart from '../btnAddCart';
import QtyChanger from '../qtyChanger';

const ItemCard = ({ itemDetails }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  const { title, id, price, image } = itemDetails;

  const noOfItems = useSelector((state) => {
    return getOrderedItemQty(id, state.cart.cartItems);
  });

  const addToCartHandler = () => {
    dispatch({ type: ADD_TO_CART, item: findItemFromID(id, items) });
  };

  const removeFromCartHandler = () => {
    dispatch({ type: REMOVE_FROM_CART, item: findItemFromID(id, items) });
  };

  return (
    <Card
      hoverable
      style={{
        width: 240,
        height: 500,
        position: 'relative',
      }}
    >
      <Link to={`/items/${id}`}>
        <Image src={image} alt={title} />
      </Link>
      <ItemDescription>
        {title && <h4>{title}</h4>}
        {price && <p>{`€ ${Number(price).toFixed(2)}`}</p>}
        {noOfItems > 0 ? (
          <QtyChanger
            removeFromCartHandler={removeFromCartHandler}
            addToCartHandler={addToCartHandler}
            noOfItems={noOfItems}
          />
        ) : (
          <BtnAddCart addToCartHandler={addToCartHandler} />
        )}
      </ItemDescription>
    </Card>
  );
};

export default ItemCard;
