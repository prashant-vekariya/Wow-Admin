import axios from 'axios'
import { sucessTost, warningTost } from '@src/views/Tost'
import { BASEURL, Token } from '@utils'

// ** Get all 
export const changePassword = (data) => {
  return async dispatch => {
    await axios.post(`${BASEURL}/staff/changepassword`, data, {
      headers: { Token }
    }).then(response => {
      sucessTost('Changed Successfully.!!')
    }).catch(err => warningTost(err.response.data.error.msg))
  }
}
