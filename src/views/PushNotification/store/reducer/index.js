// ** Initial State
const initialState = {
  allData: []
}

const notification = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_NOTIFICATION_LIST':
      return { ...state, allData: action.data }
    default:
      return { ...state }
  }
}
export default notification
