import axios from 'axios'
import { sucessTost, warningTost } from '@src/views/Tost'
import { BASEURL, Token } from '@utils'

/* eslint-disable */

// ** Get all Categories
export const getAllCategory = () => {
  return async dispatch => {
    await axios.get(`${BASEURL}/category/get_category`, {
      headers: { Token }
    }).then(response => {
      dispatch({
        type: 'GET_ALL_CATEGORY',
        data: response.data
      })
    })
  }
}

// ** Get One Category
export const getCategoryDetail = id => {
  return async dispatch => {
    await axios.get(`${BASEURL}/category/category_detail?category_id=${id}`, {
      headers: { Token }
    }).then(response => {
      dispatch({
        type: 'GET_CATEGORY_DETAILS',
        selectedCategory: response.data.data
      })
    })
  }
}

// ** Edit Category
export const editCategory = prop => {
  return async dispatch => {
    await axios.post(`${BASEURL}/category/edit_category`, prop, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Token
      }
    }).then(() => {
      dispatch({
        type: 'ADD/EDIT_CATEGORY',
        redirect: '/category'
      })
      dispatch(getAllCategory())
      sucessTost('Category Edited Successfully.!!')
    })
      .catch(err => {
        warningTost(err.response.data.error.status)
      })
  }
}

// ** Add new Category
export const addCategory = prop => {
  return async dispatch => {
    axios
      .post(`${BASEURL}/category/create_category`, prop, {
        headers: { Token }
      }).then(() => {
        dispatch({
          type: 'ADD/EDIT_CATEGORY',
          redirect: '/category'
        })
        dispatch(getAllCategory())
        sucessTost('Category Added Successfully.!!')
      })
      .catch(err => {
        warningTost(err.response.data.error.status)
      })
  }
}

// ** Delete Category
export const deleteCategory = id => {
  return (dispatch, getState) => {
    axios
      .get(`${BASEURL}/category/delete_category?category_id=${id}`, {
        headers: { Token }
      })
      .then(response => {
        dispatch(getAllCategory())
        sucessTost('Category Deleted')
      })
      .catch((err) => {
        warningTost(err.response.data.error.status)
      })
  }
}
