import axios from 'axios'
import { BASEURL, Token } from '@utils'

// ** Get all Data
export const getStatistics = () => {
  return async dispatch => {
    await axios.get(`${BASEURL}/dashboard`, {
      headers: { Token }
    }).then(response => {
      dispatch({
        type: 'GET_STATISTICS',
        data: response.data.data
      })
    })
  }
}
