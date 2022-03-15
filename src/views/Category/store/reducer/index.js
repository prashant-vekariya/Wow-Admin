// ** Initial State
const initialState = {
  allData: [],
  data: [],
  total: 1,
  params: {},
  selectedCategory: []
}

const category = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_CATEGORY':
      return { ...state, allData: action.data.data.real }
    case 'GET_CATEGORY_DETAILS':
      const category = state.allData.filter(data => data._id === action.selectedCategory)
      return { ...state, selectedCategory: category }
    case 'EDIT_CATEGORY':
      return {
        ...state,
        data: action.data,
        total: action.totalPages,
        params: action.params
      }
    case 'ADD_CATEGORY':
      return { ...state }
    case 'DELETE_USER':
      return { ...state }
    default:
      return { ...state }
  }
}
export default category
