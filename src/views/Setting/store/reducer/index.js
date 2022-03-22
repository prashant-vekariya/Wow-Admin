// ** Initial State
const initialState = {
  allReportedContent: [],
  redirect: '',
  data: [],
  total: 1
}

const setting = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_REPORTED_CONTENT':
      return { ...state, allReportedContent: action.data }
    case 'GET_REPORTED_CONTENT':
      return { ...state, data: action.data, total: action.total }
    default:
      return { ...state }
  }
}
export default setting
