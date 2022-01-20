import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
   categoryCreateReducer,
   categoryDeleteReducer,
   categoryDetailReducer,
   categoryListReducer
} from './reducers/categoryReducers';
import { 
   productCreateReducer, 
   productDeleteReducer, 
   productDetailReducer, 
   productListReducer 
} from './reducers/productReducers';

const reducer = combineReducers({
   categoryList: categoryListReducer,
   categoryCreate: categoryCreateReducer,
   categoryDetail: categoryDetailReducer,
   categoryDelete: categoryDeleteReducer,
   productList: productListReducer,
   productCreate: productCreateReducer,
   productDetail: productDetailReducer,
   productDelete: productDeleteReducer
});

const initialState = {
   categoryList: {category: []},
   categoryDetail: {category: {}},
   productList: {product: []},
   productDetail: {product: {category: {}}},

}

const middleware = [thunk];

const store = createStore(reducer, initialState,
   composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
