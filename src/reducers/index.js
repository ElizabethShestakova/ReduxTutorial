import { combineReducers } from 'redux'
import { pageReducer } from './page'
import { userReducer } from './user'

export const rootReducer = combineReducers({
	page: pageReducer,
	user: userReducer,
})

export const initialState = {
	user: {
		//вложили в user вместо строки объект
		name: 'Василий',
		surname: 'Реактов',
		age: 27,
	},
}

// export function rootReducer(state = initialState) {
// 	return state
// }
