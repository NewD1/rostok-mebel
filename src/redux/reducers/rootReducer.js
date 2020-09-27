import { combineReducers } from 'redux'
import categoryPageReducer from './categoryPage'

export const rootReducer = combineReducers({ pageCategory: categoryPageReducer })
