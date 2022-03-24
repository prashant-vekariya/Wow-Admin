import axios from 'axios'
import { sucessTost, warningTost } from '@src/views/Tost'
import { BASEURL, Token } from '@utils'

// ** Get all Role
export const getAllRole = () => {
  return async dispatch => {
    await axios.get(`${BASEURL}/role/get_role`, {
      headers: { Token }
    }).then(response => {
      dispatch({
        type: 'GET_ALL_ROLE',
        data: response.data.data.list
      })
    }).catch(err => console.log(err))
  }
}

// ** Get all Data
export const getAllData = () => {
  return async dispatch => {
    await axios.get(`${BASEURL}/staff/stafflist`, {
      headers: { Token }
    }).then(response => {
      dispatch({
        type: 'GET_ALL_DATA',
        data: response.data.data.list
      })
      dispatch(getAllRole())
    })
  }
}

// ** Get data on page or row change
export const getData = params => {
  return async dispatch => {
    await axios.get(`${BASEURL}/staff/stafflist`, {
      headers: { Token }
    }).then(response => {
      dispatch({
        type: 'GET_DATA',
        data: response.data.data.list,
        totalPages: response.data.data.list.length
      })
    })
  }
}

// ** Get User
export const getUser = id => {
  return async dispatch => {
    await axios
      .get(`${BASEURL}/staff/staffdetail?staff_id=${id}`, {
        headers: { Token }
      })
      .then(response => {
        dispatch({
          type: 'GET_USER',
          selectedUser: response.data.data.user
        })
      })
      .catch(err => console.log(err))
  }
}

// ** Add new staff
export const addStaff = user => {
  return (dispatch, getState) => {
    axios
      .post(`${BASEURL}/register`, user, {
        headers: { Token }
      })
      .then(response => {
        dispatch(getAllData())
        sucessTost('Added Successfully.!!')

      })
      .catch(err => warningTost(err.response.data.error.msg))
  }
}
// ** Edit staff
export const editStaff = user => {
  return (dispatch, getState) => {
    axios
      .post(`${BASEURL}/staff/editstaff`, user, {
        headers: { Token }
      })
      .then(response => {
        dispatch({
          type: 'EDIT_STAFF',
          redirect: '/internaluser/list'
        })
        dispatch(getAllData())
        sucessTost('Changed Successfully.!!')
      })
      .catch(err => warningTost(err.response.data.error.msg))
  }
}

// ** Delete user
export const deleteStaff = data => {
  console.log(data)
  return (dispatch, getState) => {
    axios
      .post(`${BASEURL}/staff/editstaff`, data, {
        headers: { Token }
      })
      .then(() => {
        sucessTost('Deleted Successfully.!!')
        dispatch(getAllData())
      })
      .catch(err => warningTost(err.response.data.error.msg))
  }
}

// ** Deactivate User 
export const deactivateStaff = data => {
  console.log(data)
  return dispatch => {
    axios
      .post(`${BASEURL}/staff/editstaff`, data, {
        headers: { Token }
      })
      .then(() => {
        dispatch(getAllData())
      })
      .catch(err => warningTost(err.response.data.error.msg))
  }
}
