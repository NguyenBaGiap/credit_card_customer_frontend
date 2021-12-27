import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { formValuesReducer } from 'redux/reducers/formValuesReducer'

export const rootReducer = combineReducers({
    form: formReducer,
    formValuesReducer
})
