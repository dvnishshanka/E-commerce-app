const ZERO_ITEMS_IN_CART = 0;

export const findItemFromID = (itemID, itemArr) => {
  return itemArr.find((item) => Number(itemID) === item.id);
};

export const findItemIndexFromID = (itemID, itemArr) => {
  return itemArr.findIndex((item) => Number(itemID) === item.id);
};

// Find the no of item quantities in the cart
export const getTotalItemQty = (cartArr) => {
  return cartArr?.reduce((acc, val) => acc + val.qty, 0);
};

// Find the no of items of a specific product
export const getOrderedItemQty = (itemId, cartArr) => {
  const itemIndex = findItemIndexFromID(itemId, cartArr);

  if (itemIndex >= 0) return cartArr[itemIndex].qty;
  else return ZERO_ITEMS_IN_CART;
};