import axios from 'axios'
import { BASEURL } from '@utils'

const Token = `wow-talent_6586563476534 ${JSON.parse(localStorage.getItem('token'))}`

// ** Get all FAQ
export const getAllClips = page => {
  return async dispatch => {
    await axios.get(`${BASEURL}/user/video?page=${page}&limit=15`, {
      headers: {
        authorization: Token
      }
    }).then(response => {
      // console.log(response.data.data)
      dispatch({
        type: 'GET_ALL_CLIPS',
        data: response.data.data.list,
        totalClips: response.data.data.totalitems,
        pages: response.data.data.pages
      })
    }).catch(err => console.log(err))
  }
}
