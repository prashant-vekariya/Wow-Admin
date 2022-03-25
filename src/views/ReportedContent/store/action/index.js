import axios from 'axios'
import { sucessTost, warningTost } from '@src/views/Tost'
import { BASEURL, Token } from '@utils'

export const getReportedContentList = page => {
  return async dispatch => {
    await axios.get(`${BASEURL}/user/report?page=${page}&limit=15`, {
      headers: { Token }
    }).then(response => {
      dispatch({
        type: 'GET_REPORTED_CONTENT',
        data: response.data.data.list,
        total: response.data.data.totalitems
      })
    })
  }
}
export const deleteReportedContent = data => {
  console.log(data)
  return dispatch => {
    axios
      .post(`${BASEURL}/user/delete_report`, data, {
        headers: { Token }
      }).then(response => {
        sucessTost('Deleted Successfully.!!')
      })
  }
}