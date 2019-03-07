import { createStore } from 'redux'
import { rootReducer } from '../reducers' //удалили initialState

export const store = createStore(rootReducer)
