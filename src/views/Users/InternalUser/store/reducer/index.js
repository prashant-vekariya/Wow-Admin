// ** Initial State
const initialState = {
  allData: [],
  data: [],
  total: 1,
  selectedUser: null
}

const internalusers = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_DATA':
      return { ...state, allData: action.data }
    case 'GET_DATA':
      return {
        ...state,
        data: action.data,
        total: action.totalPages
      }
    case 'GET_USER':
      return { ...state, selectedUser: action.selectedUser }
    case 'ADD_USER':
      return { ...state }
    case 'DELETE_USER':
      return { ...state }
    default:
      return { ...state }
  }
}
export default internalusers
