export default function selectBookReducer(state=null, action) {
	switch (action.type) {
		case 'SELECT_BOOK':
			return action.payload
		default:
			return state
	}
}