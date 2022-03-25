// ** Initial State
const initialState = {
  allReportedContent: [],
  redirect: '',
  data: [],
  total: 1
}

const reported = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_REPORTED_CONTENT':
      return { ...state, allReportedContent: action.data, total: action.total }
    default:
      return { ...state }
  }
}
export default reported
