import {
  SET_ITEMS,
  TOGGLE_CART,
  TOGGLE_COMPARE,
  TOGGLE_FAVORITE,
} from "../common/constances";

let initialState = {
  itemsData: [],
  favoriteItems: [],
  compareItems: [],
  cartItems: [],
};

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return {
        ...state,
        itemsData: [...action.items],
      };
    case TOGGLE_FAVORITE: {
      let stateCopy = { ...state };
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
      let stateCopy = { ...state };
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
      let stateCopy = { ...state };
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

export const setItems = (items) => ({ type: SET_ITEMS, items });
export const toggleFavorite = (itemId) => ({ type: TOGGLE_FAVORITE, itemId });
export const toggleCart = (itemId) => ({ type: TOGGLE_CART, itemId });
export const toggleCompare = (itemId) => ({ type: TOGGLE_COMPARE, itemId });
