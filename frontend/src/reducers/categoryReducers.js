import {
   LIST_CATEGORY_REQUEST,
   LIST_CATEGORY_SUCCESS,
   LIST_CATEGORY_FAIL,
   CREATE_CATEGORY_REQUEST,
   CREATE_CATEGORY_SUCCESS,
   CREATE_CATEGORY_FAIL,
   CREATE_CATEGORY_RESET,
   DETAIL_CATEGORY_REQUEST,
   DETAIL_CATEGORY_SUCCESS,
   DETAIL_CATEGORY_FAIL,
   DELETE_CATEGORY_REQUEST,
   DELETE_CATEGORY_SUCCESS,
   DELETE_CATEGORY_FAIL
} from '../constants/categoryConstants';

export const categoryListReducer = (state = {category: []}, action) => {
   switch(action.type) {
      case LIST_CATEGORY_REQUEST:
         return {loading: true, category: []}
      case LIST_CATEGORY_SUCCESS:
         return {loading: false, category: action.payload}
      case LIST_CATEGORY_FAIL:
         return {loading: false, error: action.payload }
      default:
         return state;
   }
}

export const categoryCreateReducer = (state = {category: {}}, action) => {
   switch(action.type) {
      case CREATE_CATEGORY_REQUEST:
         return {loading: true, ...state}
      case CREATE_CATEGORY_SUCCESS:
         return {loading: false, success: true, category: action.payload}
      case CREATE_CATEGORY_FAIL:
         return {loading: false, error: action.payload }
      case CREATE_CATEGORY_RESET:
          return {category: {}};
      default:
         return state;
   }
}

export const categoryDetailReducer = (state = {category: {}}, action) => {
   switch(action.type) {
      case DETAIL_CATEGORY_REQUEST:
         return {loading: true, ...state}
      case DETAIL_CATEGORY_SUCCESS:
         return {loading: false, success: true, category: action.payload}
      case DETAIL_CATEGORY_FAIL:
         return {loading: false, error: action.payload }
      default:
         return state;
   }
}

export const categoryDeleteReducer = (state = {category: {}}, action) => {
   switch(action.type) {
      case DELETE_CATEGORY_REQUEST:
         return {loading: true }
      case DELETE_CATEGORY_SUCCESS:
         return {loading: false, success: true, message: action.payload}
      case DELETE_CATEGORY_FAIL:
         return {loading: false, error: action.payload }
      default:
         return state;
   }
}