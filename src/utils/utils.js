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
