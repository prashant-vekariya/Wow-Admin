import axios from 'axios'
import { BASEURL } from '@utils'

const Token = `wow-talent_6586563476534 ${JSON.parse(localStorage.getItem('token'))}`

//** Get all Data
export const getAllWowUserData = () => {
  return async dispatch => {
    await axios.get(`${BASEURL}/user/userlist?limit=100000000000`, {
      headers: {
        authorization: Token
      }
    }).then(response => {
      // console.log(response)
      dispatch({
        type: 'GET_ALL_DATA',
        data: response.data.data.data
      })
    })
  }
}

// ** Get data on page or row change
export const getWowUserList = params => {
  return async dispatch => {
    // console.log(params)
    await axios.get(`${BASEURL}/user/userlist?page=${params.page}&limit=${params.limit}`, {
      headers: {
        authorization: Token
      }
    }).then(response => {
      dispatch({
        type: 'GET_DATA',
        data: response.data.data.data,
        total: response.data.data.total_documents,
        params
      })
    })
  }
}

// ** Get User
export const getUser = id => {
  return async dispatch => {
    await axios
      .get('/api/users/user', { id })
      .then(response => {
        dispatch({
          type: 'GET_USER',
          selectedUser: response.data.user
        })
      })
      .catch(err => console.log(err))
  }
}

// ** Add new user
export const addUser = user => {
  return (dispatch, getState) => {
    axios
      .post('/apps/users/add-user', user)
      .then(response => {
        dispatch({
          type: 'ADD_USER',
          user
        })
      })
      .then(() => {
        dispatch(getData(getState().users.params))
        dispatch(getAllData())
      })
      .catch(err => console.log(err))
  }
}

// ** Delete user
export const deleteUser = id => {
  return (dispatch, getState) => {
    axios
      .delete('/apps/users/delete', { id })
      .then(response => {
        dispatch({
          type: 'DELETE_USER'
        })
      })
      .then(() => {
        dispatch(getData(getState().users.params))
        dispatch(getAllData())
      })
  }
}
