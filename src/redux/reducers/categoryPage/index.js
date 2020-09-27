import { CHANGE_CATEGORY } from 'src/redux/actions/types'

const initialState = {}

function categoryPageReducer(state = initialState, action) {
	switch (action.type) {
		case CHANGE_CATEGORY:
			return { ...state, ...action.payload }
		default:
			return state
	}
}

export default categoryPageReducer
