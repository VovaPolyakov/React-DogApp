import {createStore,compose,applyMiddleware} from 'redux'
import { rootReducer } from './rootReducer'
import { initialState } from './initialState'

import {getDataMiddleWares} from './middlewares'

const middlewares = [getDataMiddleWares]

const data = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middlewares),
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default data
