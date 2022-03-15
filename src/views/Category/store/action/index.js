import axios from 'axios'
import { toast, Slide } from 'react-toastify'
import { BASEURL } from '@utils'

const Token = `wow-talent_6586563476534 ${JSON.parse(localStorage.getItem('token'))}`

// ** Get all Categories
export const getAllCategory = () => {
  return async dispatch => {
    await axios.get(`${BASEURL}/category/get_category`, {
      headers: {
        'content-type': 'multipart/form-data',
        authorization: Token
      }
    }).then(response => {
      dispatch({
        type: 'GET_ALL_CATEGORY',
        data: response.data
      })
    })
  }
}

// ** Get One Category
export const getCategoryDetail = id => {
  return async dispatch => {
    await dispatch({
      type: 'GET_CATEGORY_DETAILS',
      selectedCategory: id
    })
  }
}

// ** Edit Category
export const editCategory = prop => {
  return async dispatch => {
    await axios.post(`${BASEURL}/category/edit_category`, prop, {
      headers: {
        authorization: Token
      }
    }).catch(err => {
      if (err.response.data.error.msg === "Invalide body credentials") {
        toast.warning(
          <div className='toastify-header'>
            <div className='title-wrapper'>
              <h6 className='toast-title font-weight-bold text-uppercase'>CATEGORY NAME ALREADY TAKEN</h6>
            </div>
          </div>,
          { transition: Slide, hideProgressBar: true, autoClose: 3000 }
        )
      }
    })
  }
}

// ** Add new Category
export const addCategory = prop => {
  return async dispatch => {
    axios
      .post(`${BASEURL}/category/create_category`, prop, {
        headers: {
          authorization: Token
        }
      })
      .then(response => {
        // console.log('1212', response)
        dispatch(getAllCategory())
      })
      .catch(err => {
        toast.warning(
          <div className='toastify-header'>
            <div className='title-wrapper'>
              <h6 className='toast-title font-weight-bold text-uppercase'>{err.response.data.error.msg}</h6>
            </div>
          </div>,
          { transition: Slide, hideProgressBar: true, autoClose: 3000 }
        )
      })
  }
}

// ** Delete user
export const deleteUser = id => {
  return (dispatch, getState) => {
    axios
      .delete('/apps/users/delete', { id })
      .then(response => {
        dispatch({
          type: 'DELETE_USER'
        })
      })
      .then(() => {
        dispatch(getData(getState().users.params))
        dispatch(getAllData())
      })
  }
}
