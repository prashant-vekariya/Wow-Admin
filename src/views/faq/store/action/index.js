import axios from 'axios'
import { sucessTost, warningTost } from '@src/views/Tost'
import { BASEURL, Token } from '@utils'

// ** Get all FAQ
/* eslint-disable */
export const getAllFaq = () => {
  return async dispatch => {
    await axios.get(`${BASEURL}/page/faq`, {
      headers: { Token }
    }).then(response => {
      dispatch({
        type: 'GET_ALL_FAQ',
        data: response.data.data.content
      })
    }).catch(err => console.log(err))
  }
}

// ** Add new FAQ
export const createFaqCategory = data => {
  const datas = JSON.stringify(data)
  return dispatch => {
    axios
      .post(`${BASEURL}/page/create_faq`, data, {
        headers: { Token }
      })
      .then(() => {
        dispatch(getAllFaq())
      })
      .catch(err => console.log(err))
  }
}

// ** Add new Question
export const createFaqQuestion = data => {
  return dispatch => {
    axios
      .post(`${BASEURL}/page/create_faq_question`, data, {
        headers: { Token }
      })
      .then(res => {
        if (res.status === 200) {
          dispatch({
            type: 'EDIT_QUESTION',
            redirect: '/faq'
          })
          dispatch(getAllFaq())
          sucessTost('Created Successfully.!!')
        }
      })
      .catch(err => warningTost(err.response.data.error.status))
  }
}

// ** Edit FAQ Category
export const editFaqCategory = data => {
  return dispatch => {
    axios
      .post(`${BASEURL}/page/edit_faq_category`, data, {
        headers: { Token }
      })
      .then(() => {
        dispatch(getAllFaq())
      })
      .catch(err => warningTost(err.response.data.error.status))
  }
}

// ** Edit FAQ Question
export const editFaqQuestion = data => {
  return dispatch => {
    axios
      .post(`${BASEURL}/page/edit_faq_question`, data, {
        headers: { Token }
      })
      .then(res => {
        // console.log(res)
        if (res.status === 200) {
          dispatch({
            type: 'EDIT_QUESTION',
            redirect: '/faq'
          })
          dispatch(getAllFaq())
          sucessTost('Edited Successfully.!!')
        }
      })
      .catch(err => warningTost(err.response.data.error.status))
  }
}

// ** Delete FAQ Category
export const deleteFaqCategory = id => {
  const data = {
    category_id: id,
    soft_delete: true
  }
  return async dispatch => {
    axios
      .post(`${BASEURL}/page/edit_faq_category`, data, {
        headers: { Token }
      }).then(() => {
        dispatch(getAllFaq())
        sucessTost('Deleted Successfully.!!')
      })

  }
}

// ** Delete FAQ Question
export const deleteFaqQuestion = id => {
  const data = {
    question_id: id,
    soft_delete: true
  }
  return async dispatch => {
    axios
      .post(`${BASEURL}/page/edit_faq_question`, data, {
        headers: { Token }
      }).then(() => {
        dispatch(getAllFaq())
        sucessTost('Deleted Successfully.!!')
      })
  }
}

export const getFaqCategoryDetails = id => {
  return async dispatch => {
    await axios.get(`${BASEURL}/page/faq_category_detail?faq_id=${id}`, {
      headers: { Token }
    }).then(response => {
      dispatch({
        type: 'GET_FAQ_CATEGORY_DETAILS',
        selectedFaqCategory: response.data.data.data
      })
    })

  }
}

export const getFaqQuestionDetails = id => {
  return async dispatch => {
    await axios.get(`${BASEURL}/page/faq_question_detail?faq_id=${id}`, {
      headers: { Token }
    }).then(response => {
      dispatch({
        type: 'GET_FAQ_QUESTION_DETAILS',
        selectedFaqQuestion: response.data.data.data
      })
    })

  }
}

