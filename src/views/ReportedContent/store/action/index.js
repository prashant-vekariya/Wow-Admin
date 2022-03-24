import axios from 'axios'
import { BASEURL, Token } from '@utils'

// ** Get all 
export const getAllReportedContent = () => {
  return async dispatch => {
    await axios.get(`${BASEURL}/user/report?limit=2000000000`, {
      headers: { Token }
    }).then(response => {
      // console.log(response.data.data.list)
      dispatch({
        type: 'GET_ALL_REPORTED_CONTENT',
        data: response.data.data.list
      })
    }).catch(err => console.log(err))
  }
}

// ** Get data on page or row change
export const getReportedContentList = props => {
  return async dispatch => {
    // console.log(params)
    await axios.get(`${BASEURL}/user/report?page=${props.page}&limit=${props.limit}`, {
      headers: { Token }
    }).then(response => {
      dispatch({
        type: 'GET_REPORTED_CONTENT',
        data: response.data.data.list,
        total: response.data.data.totalitems,
        props
      })
    })
  }
}

