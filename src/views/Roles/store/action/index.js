import axios from 'axios'
import { BASEURL } from '@utils'

const Token = `wow-talent_6586563476534 ${JSON.parse(localStorage.getItem('token'))}`

// ** Get all Role
export const getAllRoleData = () => {
  return async dispatch => {
    await axios.get(`${BASEURL}/role/get_role`, {
      headers: {
        authorization: Token
      }
    }).then(response => {
      dispatch({
        type: 'GET_ALL_DATA',
        data: response.data.data.list
      })
    }).catch(err => console.log(err))
  }
}

// ** Add new Role
export const addRole = role => {
  return dispatch => {
    axios
      .post(`${BASEURL}/role/create_role`, role, {
        headers: {
          authorization: Token
        }
      })
      .then(() => {
        dispatch(getAllRoleData())
      })
      .catch(err => console.log(err))
  }
}

// ** Get Single Role
export const getRoleDetails = id => {
  return async dispatch => {
    await axios.get(`${BASEURL}/role/role_detail?role_id=${id}`, {
      headers: {
        authorization: Token
      }
    }).then(response => {
      dispatch({
        type: 'GET_ROLE_DETAILS',
        selectedRole: response.data.data
      })
    })

  }
}

// ** Edit Role
export const editRole = role => {
  return dispatch => {
    axios
      .post(`${BASEURL}/role/edit_permission`, role, {
        headers: {
          authorization: Token
        }
      })
      .then(() => {
        dispatch({
          type: 'EDIT_ROLE',
          redirect: '/roles'
        })
      })
      .catch(err => console.log(err))
  }
}
