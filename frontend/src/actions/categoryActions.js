import {
   LIST_CATEGORY_REQUEST,
   LIST_CATEGORY_SUCCESS,
   LIST_CATEGORY_FAIL,
   CREATE_CATEGORY_REQUEST,
   CREATE_CATEGORY_SUCCESS,
   CREATE_CATEGORY_FAIL,
   DETAIL_CATEGORY_REQUEST,
   DETAIL_CATEGORY_SUCCESS,
   DETAIL_CATEGORY_FAIL,
   DELETE_CATEGORY_REQUEST,
   DELETE_CATEGORY_SUCCESS,
   DELETE_CATEGORY_FAIL
} from '../constants/categoryConstants';
import axios from 'axios';


const URL = '/api/category';

const config = {
   headers: {
      'Content-Type': 'application/json',
   }
}

export const listCategory = () => async(dispatch) => {
   try {
      dispatch({type: LIST_CATEGORY_REQUEST});

      const { data } = await axios.get(URL)
      dispatch({
         type: LIST_CATEGORY_SUCCESS,
         payload: data
      });
   } catch (err) {
      dispatch({
         type: LIST_CATEGORY_FAIL,
         payload: err.response && 
            err.response.data.message ? err.response.data.message : 
            err.message
      });
   }
};

export const getDetailCategory = (id) => async(dispatch) => {
   try {
      dispatch({type: DETAIL_CATEGORY_REQUEST});

      const { data } = await axios.get(`${URL}/${id}`);
      dispatch({
         type: DETAIL_CATEGORY_SUCCESS,
         payload: data
      });
   } catch (err) {
      dispatch({
         type: DETAIL_CATEGORY_FAIL,
         payload: err.response && 
            err.response.data.message ? err.response.data.message : 
            err.message
      });
   }
};


export const createCategory = (category) => async(dispatch) => {
   try {
      dispatch({type: CREATE_CATEGORY_REQUEST});

      const { data } = await axios.post(
         URL,
         category,
         config
      );
      dispatch({
         type: CREATE_CATEGORY_SUCCESS,
         payload: data
      });
   } catch (err) {
      dispatch({
         type: CREATE_CATEGORY_FAIL,
         payload: err.response && 
            err.response.data.message ? err.response.data.message : 
            err.message
      });
   }

};


export const editCategory = (category) => async(dispatch) => {
   try {
      dispatch({type: CREATE_CATEGORY_REQUEST});

      const { data } = await axios.patch(
         `${URL}/${category.id}`,
         category,
         config
      );
      dispatch({
         type: CREATE_CATEGORY_SUCCESS,
         payload: data
      });
   } catch (err) {
      dispatch({
         type: CREATE_CATEGORY_FAIL,
         payload: err.response && 
            err.response.data.message ? err.response.data.message : 
            err.message
      });
   }

};


export const deleteCategory = (id) => async(dispatch) => {
   try {
      dispatch({type: DELETE_CATEGORY_REQUEST});

      const { data } = await axios.delete(
         `${URL}/${id}`,
         config
      );
      dispatch({
         type: DELETE_CATEGORY_SUCCESS,
         payload: data
      });
   } catch (err) {
      dispatch({
         type: DELETE_CATEGORY_FAIL,
         payload: err.response && 
            err.response.data.message ? err.response.data.message : 
            err.message
      });
   }

};