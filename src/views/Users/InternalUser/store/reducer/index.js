// ** Initial State
const initialState = {
  allData: [],
  roles: [],
  redirect: '',
  data: [],
  total: 1,
  selectedUser: null
}

const internalusers = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_DATA':
      return { ...state, allData: action.data, redirect: '' }
    case 'GET_ALL_ROLE':
      return { ...state, roles: action.data }
    case 'GET_DATA':
      return {
        ...state,
        data: action.data,
        total: action.totalPages
      }
    case 'GET_USER':
      return { ...state, selectedUser: action.selectedUser }
    case 'EDIT_STAFF':
      return { ...state, redirect: action.redirect }
    default:
      return { ...state }
  }
}
export default internalusers
