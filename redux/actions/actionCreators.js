import * as actionTypes from 'redux/actions/actionTypes'

// form
export const fetchInitialValuesForm = (data) => ({
  type: actionTypes.SET_INITIAL_VALUES_FORM_REQUEST,
  payload: { ...data },
})
