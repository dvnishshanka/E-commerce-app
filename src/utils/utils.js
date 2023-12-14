const ZERO_ITEMS_IN_CART = 0;
const EURO = '€';

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

// Filter items from the item array based on a specific key-value pair
export const filterItems = (itemArr, keyData, value) => {
  const filteredItems = itemArr.filter((item) => item[keyData] === value);
  return filteredItems;
};

// Filter sale items from the item array
export const filterSaleItems = (itemArr) => {
  const filteredItems = itemArr.filter((item) => item.discountRate > 0);
  return filteredItems;
};

// Calculate total delivery charge
export const calTotalDeliveryCharge = (cartArr) => {
  const calTotalDelivery = cartArr.reduce((acc, currentVal) => {
    return acc + currentVal.deliveryCharge;
  }, 0);
  return calTotalDelivery;
};

// Format price with currency symbol
export const formatPrice = (price, isSignFirst = true) => {
  if (isSignFirst) return `${EURO} ${Number(price).toFixed(2)}`;
  else return `${Number(price).toFixed(2)} ${EURO}`;
};

// Calculate price after discount
export const calFinalPrice = (originalPrice, discounRate) => {
  return originalPrice - (discounRate / 100) * originalPrice;
};
