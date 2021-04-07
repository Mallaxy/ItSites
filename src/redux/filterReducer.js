import {SET_FILTER_VALUES} from "../common/constances";

let initialState = {
        blade: '',
        handle: '',
        length: ''
    }

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER_VALUES:
            return {...state, ...action.value}
        default:
            return state
    }
}

export const setFilterValues = (value) => ({type: SET_FILTER_VALUES, value})