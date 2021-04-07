import {SET_ITEMS, TOGGLE_CART, TOGGLE_COMPARE, TOGGLE_FAVORITE} from "../common/constances";

let initialState = {
    itemsData: []
}


export const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ITEMS:
            return {
                ...state,
                itemsData: [...action.items]
            }
        case TOGGLE_FAVORITE:
            return {
                ...state,
                itemsData: state.itemsData.map(item => {
                    if (item.id === action.itemId) {
                        return {...item, favorite: !item.favorite}
                    }
                    return item
                })
            }
        case TOGGLE_CART:
            return {
                ...state,
                itemsData: state.itemsData.map(item => {
                    if (item.id === action.itemId) {
                        return {...item, inCart: !item.inCart}
                    }
                    return item
                })
            }
        case TOGGLE_COMPARE:
            return {
                ...state,
                itemsData: state.itemsData.map(item => {
                    if (item.id === action.itemId) {
                        return {...item, compare: !item.compare}
                    }
                    return item
                })
            }
        default:
            return state
    }
}

export const setItems = (items) => ({type: SET_ITEMS, items})
export const toggleFavorite = (itemId) => ({type: TOGGLE_FAVORITE, itemId})
export const toggleCart = (itemId) => ({type: TOGGLE_CART, itemId})
export const toggleCompare = (itemId) => ({type: TOGGLE_COMPARE, itemId})