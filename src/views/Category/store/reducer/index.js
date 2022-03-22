// ** Initial State
const initialState = {
  allData: [],
  redirect: '',
  data: [],
  total: 1,
  params: {},
  selectedCategory: null
}

const category = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_CATEGORY':
      return { ...state, allData: action.data.data.real, redirect: '' }
    case 'GET_CATEGORY_DETAILS':
      return { ...state, selectedCategory: action.selectedCategory }
    case 'ADD/EDIT_CATEGORY':
      return {
        ...state,
        redirect: action.redirect
      }
    default:
      return { ...state }
  }
}
export default category
