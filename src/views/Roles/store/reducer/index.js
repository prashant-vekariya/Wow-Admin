// ** Initial State
const initialState = {
  allRoleData: [],
  redirect: '',
  selectedRole: null
}

const roles = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_DATA':
      return { ...state, allRoleData: action.data, selectedRole: null, redirect: '' }
    case 'GET_ROLE_DETAILS':
      return { ...state, selectedRole: action.selectedRole }
    case 'EDIT_ROLE':
      return { ...state, redirect: action.redirect }
    default:
      return { ...state }
  }
}
export default roles
