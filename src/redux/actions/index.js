import { CHANGE_CATEGORY } from './types'

export function changeCategory(itemsUrl) {
	return {
		type: CHANGE_CATEGORY,
		payload: {
			itemsUrl,
		},
	}
}
