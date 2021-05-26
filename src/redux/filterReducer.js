import { SET_FILTER_VALUES } from "../common/constances";

const initialState = {
  blade: "",
  handle: "",
  length: "",
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER_VALUES:
      return { ...state, ...action.value };
    default:
      return state;
  }
};
