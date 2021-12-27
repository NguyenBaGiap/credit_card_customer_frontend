import * as baseActions from 'redux/actions/baseActions'
import { fetchInitialValuesForm } from 'redux/actions/actionCreators'

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const fetchCustomerSessionRequest = () => {
  return async (dispatch) => {
    try {
      dispatch(baseActions.genRequestLoadingAction())
      await sleep(3000)
      const initialValues = {
        mobileNumber: '0914249694',
      }
      dispatch(fetchInitialValuesForm(initialValues))
    } catch (error) {
      baseActions.commonHandleError(error, dispatch)
    } finally {
      dispatch(baseActions.genRequestFinishAction())
    }
  }
}
