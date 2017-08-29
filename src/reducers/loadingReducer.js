const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case 'LOADING_BOOKS':
      return true
    case 'FETCH_BOOKS':
      return false
    default:
      return state
  }
}

export default loadingReducer