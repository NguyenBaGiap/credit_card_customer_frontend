import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastReducer } from 'react-redux-toastr'
import { formValuesReducer } from 'redux/reducers/formValuesReducer'
import { requestStatusReducer } from 'redux/reducers/requestStatusReducer'

export const rootReducer = () =>
  combineReducers({
    form: formReducer,
    formValuesReducer,
    requestStatusReducer,
    toastReducer,
  })
