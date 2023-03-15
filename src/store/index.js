import {createStore} from 'redux'
import { rootReducer } from './rootReducer'
import { initialState } from './initialState'


const data = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default data
