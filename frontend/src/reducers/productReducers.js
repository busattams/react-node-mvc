import {
   LIST_PRODUCT_REQUEST,
   LIST_PRODUCT_SUCCESS,
   LIST_PRODUCT_FAIL,
   CREATE_PRODUCT_REQUEST,
   CREATE_PRODUCT_SUCCESS,
   CREATE_PRODUCT_FAIL,
   CREATE_PRODUCT_RESET,
   DETAIL_PRODUCT_REQUEST,
   DETAIL_PRODUCT_SUCCESS,
   DETAIL_PRODUCT_FAIL,
   DELETE_PRODUCT_REQUEST,
   DELETE_PRODUCT_SUCCESS,
   DELETE_PRODUCT_FAIL
} from '../constants/productConstants';

export const productListReducer = (state = {product: []}, action) => {
   switch(action.type) {
      case LIST_PRODUCT_REQUEST:
         return {loading: true, product: []}
      case LIST_PRODUCT_SUCCESS:
         return {loading: false, product: action.payload}
      case LIST_PRODUCT_FAIL:
         return {loading: false, error: action.payload }
      default:
         return state;
   }
}

export const productCreateReducer = (state = {product: {}}, action) => {
   switch(action.type) {
      case CREATE_PRODUCT_REQUEST:
         return {loading: true, product: {}}
      case CREATE_PRODUCT_SUCCESS:
         return {loading: false, success: true, product: action.payload}
      case CREATE_PRODUCT_FAIL:
         return {loading: false, error: action.payload }
      case CREATE_PRODUCT_RESET:
          return {product: {}};
      default:
         return state;
   }
}

export const productDetailReducer = (state = {product: {}}, action) => {
   switch(action.type) {
      case DETAIL_PRODUCT_REQUEST:
         return {loading: true, ...state}
      case DETAIL_PRODUCT_SUCCESS:
         return {loading: false, success: true, product: action.payload}
      case DETAIL_PRODUCT_FAIL:
         return {loading: false, error: action.payload }
      default:
         return state;
   }
}

export const productDeleteReducer = (state = {product: {}}, action) => {
   switch(action.type) {
      case DELETE_PRODUCT_REQUEST:
         return {loading: true }
      case DELETE_PRODUCT_SUCCESS:
         return {loading: false, success: true, message: action.payload}
      case DELETE_PRODUCT_FAIL:
         return {loading: false, error: action.payload }
      default:
         return state;
   }
}