// ** Initial State
const initialState = {
  allFaqData: [],
  redirect: '',
  selectedFaqCategory: null,
  selectedFaqQuestion: null
}

const faq = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_FAQ':
      return { ...state, allFaqData: action.data, selectedFaqCategory: null, selectedFaqQuestion: null, redirect: '' }
    case 'GET_FAQ_CATEGORY_DETAILS':
      return { ...state, selectedFaqCategory: action.selectedFaqCategory }
    case 'GET_FAQ_QUESTION_DETAILS':
      return { ...state, selectedFaqQuestion: action.selectedFaqQuestion }
    case 'EDIT_QUESTION':
      return { ...state, redirect: action.redirect }
    default:
      return { ...state }
  }
}
export default faq
