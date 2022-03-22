import axios from 'axios'
import { sucessTost, warningTost } from '@src/views/Tost'
import { BASEURL } from '@utils'

const Token = `wow-talent_6586563476534 ${JSON.parse(localStorage.getItem('token'))}`

// ** Get all 
export const changePassword = (data) => {
  return async dispatch => {
    await axios.post(`${BASEURL}/staff/changepassword`, data, {
      headers: {
        authorization: Token
      }
    }).then(response => {
      sucessTost('Changed Successfully.!!')
    }).catch(err => warningTost(err.response.data.error.msg))
  }
}
