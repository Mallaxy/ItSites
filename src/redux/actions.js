import {
	SET_ITEMS,
	TOGGLE_CART,
	TOGGLE_COMPARE,
	TOGGLE_FAVORITE,
	SET_FILTER_VALUES
} from "../common/constances";

export const setItems = (items) => ({ type: SET_ITEMS, items });
export const toggleFavorite = (itemId) => ({ type: TOGGLE_FAVORITE, itemId });
export const toggleCart = (itemId) => ({ type: TOGGLE_CART, itemId });
export const toggleCompare = (itemId) => ({ type: TOGGLE_COMPARE, itemId });
export const setFilterValues = (value) => ({ type: SET_FILTER_VALUES, value });