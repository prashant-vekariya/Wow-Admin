import axios from 'axios'
import { sucessTost, warningTost } from '@src/views/Tost'
import { BASEURL, Token } from '@utils'

// ** Get all Data
export const getAllData = () => {
  return async dispatch => {
    await axios.get(`${BASEURL}/page/get_pageinfo`, {
      headers: { Token }
    }).then(response => {
      dispatch({
        type: 'GET_ALL_DATA',
        data: response.data.data.content
      })
    })
  }
}

// ** Get Page Details
export const getInfoDetails = id => {
  return async dispatch => {
    await axios
      .get(`${BASEURL}/page/page_detail?page_id=${id}`, {
        headers: { Token }
      })
      .then(response => {
        dispatch({
          type: 'GET_PAGE_INFO',
          selectedInfo: response.data.data.data
        })
      })
      .catch(err => console.log(err))
  }
}

// ** Edit Page Info
export const editPageInfo = data => {
  return (dispatch, getState) => {
    axios
      .post(`${BASEURL}/page/edit_pageinfo`, data, {
        headers: {
          'content-type': 'application/json',
          Token
        }
      })
      .then(res => {
        if (res.status === 200) {
          dispatch({
            type: 'ADD/EDIT_PAGE_INFO',
            redirect: '/pageinfo'
          })
          dispatch(getAllData())
          sucessTost('Edited Successfully.!!')
        } else {
          console.log(res)
        }
      })
      .catch(err => warningTost(err.response.data.error.status))
  }
}

// ** Add Page Info
export const addPageInfo = data => {
  return (dispatch, getState) => {
    axios
      .post(`${BASEURL}/page/add_pageinfo`, data, {
        headers: {
          'content-type': 'application/json',
          Token
        }
      })
      .then(res => {
        if (res.status === 200) {
          dispatch({
            type: 'ADD/EDIT_PAGE_INFO',
            redirect: '/pageinfo'
          })
          dispatch(getAllData())
          sucessTost('Created Successfully.!!')
        } else {
          console.log(res)
        }
      })
      .catch(err => warningTost(err.response.data.error.status))
  }
}

// ** Delete info
export const deleteInfo = data => {
  return (dispatch, getState) => {
    axios
      .post(`${BASEURL}/page/edit_pageinfo`, data, {
        headers: {
          'content-type': 'application/json',
          Token
        }
      })
      .then(() => {
        dispatch(getAllData())
        sucessTost('Deleted Successfully.!!')
      })
  }
}
