import axios from 'axios'
import { sucessTost, warningTost } from '@src/views/Tost'
import { BASEURL, Token } from '@utils'

// ** Get all FAQ
export const getNotificationList = () => {
  return async dispatch => {
    await axios.get(`${BASEURL}/notification/list_notification`, {
      headers: { Token }
    }).then(response => {
      // console.log(response.data.data)
      dispatch({
        type: 'GET_NOTIFICATION_LIST',
        data: response.data.data.list
      })
    }).catch(err => console.log(err))
  }
}

export const createNotification = data => {
  return dispatch => {
    axios
      .post(`${BASEURL}/notification/create_notification`, data, {
        headers: { Token }
      })
      .then(() => {
        dispatch(getNotificationList())
        sucessTost('Created Successfully.!!')
      })
      .catch(err => warningTost(err.response.data.error.status))
  }
}

export const sendNotification = data => {
  return dispatch => {
    axios
      .post(`${BASEURL}/notification/send_notification`, data, {
        headers: { Token }
      })
      .then(() => {
        sucessTost('Send Successfully.!!')
      })
      .catch(err => warningTost(err.response.data.error.status))
  }
}
export const deleteNotification = id => {
  return async dispatch => {
    await axios.get(`${BASEURL}/notification/delete_notification?notification_id=${id}`, {
      headers: { Token }
    })
      .then(() => {
        dispatch(getNotificationList())
        sucessTost('Deleted Successfully.!!')
      })
      .catch(err => warningTost(err.response.data.error.status))
  }
}