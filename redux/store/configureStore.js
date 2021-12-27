import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from 'redux/reducers/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

export const configureStore = (initialState) =>
  createStore(
    rootReducer(),
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  )
