import {
  SET_ITEMS,
  TOGGLE_CART,
  TOGGLE_COMPARE,
  TOGGLE_FAVORITE,
} from "../common/constances";

const initialState = {
  itemsData: [],
  favoriteItems: [],
  compareItems: [],
  cartItems: [],
};

export const listReducer = (state = initialState, action) => {
  const stateCopy = { ...state };

  switch (action.type) {
    case SET_ITEMS:
      return {
        ...state,
        itemsData: [...action.items],
      };
    case TOGGLE_FAVORITE: {
      stateCopy.itemsData = [
        ...stateCopy.itemsData.map((item) => {
          if (item.id === action.itemId) {
            return { ...item, favorite: !item.favorite };
          }
          return item;
        }),
      ];
      stateCopy.favoriteItems = [
        ...stateCopy.itemsData.filter((item) => item.favorite),
      ];
      return stateCopy;
    }
    case TOGGLE_CART: {
      stateCopy.itemsData = [
        ...stateCopy.itemsData.map((item) => {
          if (item.id === action.itemId) {
            return { ...item, inCart: !item.inCart };
          }
          return item;
        }),
      ];
      stateCopy.cartItems = [
        ...stateCopy.itemsData.filter((item) => item.inCart),
      ];
      return stateCopy;
    }
    case TOGGLE_COMPARE: {
      stateCopy.itemsData = [
        ...stateCopy.itemsData.map((item) => {
          if (item.id === action.itemId) {
            return { ...item, compare: !item.compare };
          }
          return item;
        }),
      ];
      stateCopy.compareItems = [
        ...stateCopy.itemsData.filter((item) => item.compare),
      ];
      return stateCopy;
    }
    default:
      return state;
  }
};
