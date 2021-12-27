import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from 'redux/reducers/rootReducer'
import { createRouterMiddleware } from 'connected-next-router'
import { composeWithDevTools } from 'redux-devtools-extension'

export const configureStore = (initialState) =>
  createStore(
    rootReducer(),
    initialState,
    composeWithDevTools(applyMiddleware(createRouterMiddleware(), thunk))
  )
