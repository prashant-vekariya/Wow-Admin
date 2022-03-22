// ** Initial State
const initialState = {
  allClips: [],
  pages: 0,
  totalClips: 0
}

const clips = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_CLIPS':
      return { ...state, allClips: [...state.allClips, ...action.data], totalClips: action.totalClips, pages: action.pages }
    default:
      return { ...state }
  }
}
export default clips
