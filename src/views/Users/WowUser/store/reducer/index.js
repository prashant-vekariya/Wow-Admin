// ** Initial State
const initialState = {
  allData: [],
  data: [],
  total: 1,
  allfollowerlist: [],
  followerlist: [],
  totalfollower: 0,
  allfollowinglist: [],
  followinglist: [],
  totalfollowing: 0,
  selectedUser: {}
}

const wowusers = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_DATA':
      return { ...state, allData: action.data }
    case 'GET_DATA':
      return {
        ...state,
        data: action.data,
        total: action.total
      }
    case 'GET_USER':
      return { ...state, selectedUser: action.selectedUser }
    case 'GET_ALL_FOLLOWER_DATA':
      return { ...state, allfollowerlist: action.data }
    case 'GET_FOLLOWER_LIST':
      return { ...state, followerlist: action.data, totalfollower: action.total }
    case 'GET_ALL_FOLLOWING_DATA':
      return { ...state, allfollowinglist: action.data }
    case 'GET_FOLLOWING_LIST':
      return { ...state, followinglist: action.data, totalfollowing: action.total }
    default:
      return { ...state }
  }
}
export default wowusers
