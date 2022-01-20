import {
   LIST_PRODUCT_REQUEST,
   LIST_PRODUCT_SUCCESS,
   LIST_PRODUCT_FAIL,
   CREATE_PRODUCT_REQUEST,
   CREATE_PRODUCT_SUCCESS,
   CREATE_PRODUCT_FAIL,
   DETAIL_PRODUCT_REQUEST,
   DETAIL_PRODUCT_SUCCESS,
   DETAIL_PRODUCT_FAIL,
   DELETE_PRODUCT_REQUEST,
   DELETE_PRODUCT_SUCCESS,
   DELETE_PRODUCT_FAIL
} from '../constants/productConstants';
import axios from 'axios';


const URL = '/api/product';

const config = {
   headers: {
      'Content-Type': 'application/json',
   }
}

export const listProduct = () => async(dispatch) => {
   try {
      dispatch({type: LIST_PRODUCT_REQUEST});

      const { data } = await axios.get(URL)
      dispatch({
         type: LIST_PRODUCT_SUCCESS,
         payload: data
      });
   } catch (err) {
      dispatch({
         type: LIST_PRODUCT_FAIL,
         payload: err.response && 
            err.response.data.message ? err.response.data.message : 
            err.message
      });
   }
};

export const getDetailProduct = (id) => async(dispatch) => {
   try {
      dispatch({type: DETAIL_PRODUCT_REQUEST});

      const { data } = await axios.get(`${URL}/${id}`);
      dispatch({
         type: DETAIL_PRODUCT_SUCCESS,
         payload: data
      });
   } catch (err) {
      dispatch({
         type: DETAIL_PRODUCT_FAIL,
         payload: err.response && 
            err.response.data.message ? err.response.data.message : 
            err.message
      });
   }
};


export const createProduct = (product) => async(dispatch) => {
   try {
      dispatch({type: CREATE_PRODUCT_REQUEST});

      const { data } = await axios.post(
         URL,
         product,
         config
      );
      dispatch({
         type: CREATE_PRODUCT_SUCCESS,
         payload: data
      });
      
   } catch (err) {
      dispatch({
         type: CREATE_PRODUCT_FAIL,
         payload: err.response && 
            err.response.data.message ? err.response.data.message : 
            err.message
      });
   }

};


export const editProduct = (product) => async(dispatch) => {
   try {
      dispatch({type: CREATE_PRODUCT_REQUEST});

      const { data } = await axios.patch(
         `${URL}/${product.id}`,
         product,
         config
      );
      dispatch({
         type: CREATE_PRODUCT_SUCCESS,
         payload: data
      });
   } catch (err) {
      dispatch({
         type: CREATE_PRODUCT_FAIL,
         payload: err.response && 
            err.response.data.message ? err.response.data.message : 
            err.message
      });
   }

};


export const deleteProduct = (id) => async(dispatch) => {
   try {
      dispatch({type: DELETE_PRODUCT_REQUEST});

      const { data } = await axios.delete(
         `${URL}/${id}`,
         config
      );
      dispatch({
         type: DELETE_PRODUCT_SUCCESS,
         payload: data
      });
   } catch (err) {
      dispatch({
         type: DELETE_PRODUCT_FAIL,
         payload: err.response && 
            err.response.data.message ? err.response.data.message : 
            err.message
      });
   }

};