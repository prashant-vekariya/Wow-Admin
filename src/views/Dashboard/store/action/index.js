import axios from 'axios'
import { BASEURL } from '@utils'

const Token = `wow-talent_6586563476534 ${JSON.parse(localStorage.getItem('token'))}`

// ** Get all Data
export const getStatistics = () => {
  return async dispatch => {
    await axios.get(`${BASEURL}/dashboard`, {
      headers: {
        authorization: Token
      }
    }).then(response => {
      dispatch({
        type: 'GET_STATISTICS',
        data: response.data.data
      })
    })
  }
}
