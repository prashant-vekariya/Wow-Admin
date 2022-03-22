import axios from 'axios'
import { BASEURL } from '@utils'

const Token = `wow-talent_6586563476534 ${JSON.parse(localStorage.getItem('token'))}`

// ** Get all Data
export const getAllData = () => {
  return async dispatch => {
    await axios.get(`${BASEURL}/staff/stafflist`, {
      headers: {
        authorization: Token
      }
    }).then(response => {
      dispatch({
        type: 'GET_ALL_DATA',
        data: response.data.data.list
      })
    })
  }
}

// ** Get data on page or row change
export const getData = params => {
  return async dispatch => {
    await axios.get(`${BASEURL}/staff/stafflist`, {
      headers: {
        authorization: Token
      }
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
        headers: {
          authorization: Token
        }
      })
      .then(response => {
        // console.log(response)
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
        headers: {
          authorization: Token
        }
      })
      .then(response => {
        // dispatch({
        //   type: 'ADD_USER',
        //   user
        // })
        dispatch(getAllData())
      })
      .catch(err => console.log(err))
  }
}

// ** Delete user
export const deleteStaff = data => {
  console.log(data)
  return (dispatch, getState) => {
    axios
      .post(`${BASEURL}/staff/editstaff`, data, {
        headers: {
          authorization: Token
        }
      })
      .then(() => {
        dispatch(getAllData())
      })
  }
}

// ** Deactivate User 
export const deactivateStaff = data => {
  console.log(data)
  return dispatch => {
    axios
      .post(`${BASEURL}/staff/editstaff`, data, {
        headers: {
          authorization: Token
        }
      })
      .then(() => {
        console.log('----', data)
        dispatch(getAllData())
      })
  }
}
