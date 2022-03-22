// ** Initial State
const initialState = {
  allData: [],
  redirect: '',
  data: [],
  total: 1,
  selectedInfo: null
}

const pageInfo = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_DATA':
      return { ...state, allData: action.data, selectedInfo: null, redirect: '' }
    case 'GET_PAGE_INFO':
      return { ...state, selectedInfo: action.selectedInfo }
    case 'ADD/EDIT_PAGE_INFO':
      return {
        ...state,
        redirect: action.redirect
      }
    case 'ADD_USER':
      return { ...state }
    case 'DELETE_USER':
      return { ...state }
    default:
      return { ...state }
  }
}
export default pageInfo
