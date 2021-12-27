import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from 'redux/reducers/rootReducer'

export const configureStore = () => createStore(
    rootReducer,
    compose(applyMiddleware(thunk))
)