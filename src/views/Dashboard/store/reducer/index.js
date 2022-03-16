
// ** Initial State
const initialState = {
  data: []
}

const dashboard = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_STATISTICS':
      return { ...state, data: action.data }
    default:
      return { ...state }
  }
}
export default dashboard
