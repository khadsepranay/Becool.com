// import React from "react";
// import { GET_CART_REQUEST } from "./actionTypes";

// const initialState = {
//   data: [],
// };

// const reducer = (state = initialState, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case GET_CART_REQUEST:
//       return {
//         ...state,
//         data: payload,
//       };
//     default:
//       return state.data;
//   }
// };

// export { reducer };
import React from "react";
import { isAddedToCart } from "./Action.types";

const initState = {
  ProductData: [],
  isLoading: false,
  isError: false,
  isAddedtoCart: false,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "PRODUCT_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        ProductData: action.payload,
      };
    case "PRODUCT_REQ":
      return { ...state, isLoading: true, isError: false };
    case isAddedToCart:
      return { ...state, isAddedtoCart: action.payload };
    default:
      return state;
  }
};

export { reducer };
