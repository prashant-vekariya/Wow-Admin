import axios from 'axios'
import { sucessTost, warningTost } from '@src/views/Tost'
import { BASEURL, Token } from '@utils'

//** Get all Data
export const getAllWowUserData = () => {
  return async dispatch => {
    await axios.get(`${BASEURL}/user/userlist?limit=100000000000`, {
      headers: { Token }
    }).then(response => {
      dispatch({
        type: 'GET_ALL_DATA',
        data: response.data.data.data
      })
    })
  }
}

// ** Get data on page or row change
export const getWowUserList = props => {
  return async dispatch => {
    // console.log(params)
    await axios.get(`${BASEURL}/user/userlist?page=${props.page}&limit=${props.limit}`, {
      headers: { Token }
    }).then(response => {
      dispatch({
        type: 'GET_DATA',
        data: response.data.data.data,
        total: response.data.data.total_documents,
        props
      })
    })
  }
}

// ** Get User Details
export const getUser = id => {
  return async dispatch => {
    await axios
      .get(`${BASEURL}/user/userdetail?user_id=${id}`, {
        headers: { Token }
      })
      .then(response => {
        // console.log(response.data.data.user)
        dispatch({
          type: 'GET_USER',
          selectedUser: response.data.data.user
        })
      })
      .catch(err => console.log(err))
  }
}

//** Get all Data
export const getWowUserAllFollowerData = (id) => {
  return async dispatch => {
    await axios.get(`${BASEURL}/user/userfollower?user_id=${id}&limit=100000000000`, {
      headers: { Token }
    }).then(response => {
      dispatch({
        type: 'GET_ALL_FOLLOWER_DATA',
        data: response.data.data.list
      })
    })
  }
}

export const getWowUsersFollowerList = props => {
  return async dispatch => {
    await axios.get(`${BASEURL}/user/userfollower?user_id=${props.id}&page=${props.page}&limit=${props.limit}`, {
      headers: { Token }
    }).then(response => {
      dispatch({
        type: 'GET_FOLLOWER_LIST',
        data: response.data.data.list,
        total: response.data.data.totalitems
      })
    })
  }
}
export const getWowUserAllFollowingData = (id) => {
  return async dispatch => {
    await axios.get(`${BASEURL}/user/userfollowing?user_id=${id}&limit=100000000000`, {
      headers: { Token }
    }).then(response => {
      dispatch({
        type: 'GET_ALL_FOLLOWING_DATA',
        data: response.data.data.list
      })
    })
  }
}

export const getWowUsersFollowingList = props => {
  return async dispatch => {
    await axios.get(`${BASEURL}/user/userfollowing?user_id=${props.id}&page=${props.page}&limit=${props.limit}`, {
      headers: { Token }
    }).then(response => {
      dispatch({
        type: 'GET_FOLLOWING_LIST',
        data: response.data.data.list,
        total: response.data.data.totalitems
      })
    })
  }
}