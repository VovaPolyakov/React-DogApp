import {combineReducers } from 'redux'
import { dataReducer } from '../ducks/data/reducer'

export const rootReducer = combineReducers({
    data:dataReducer
})