import * as baseActions from 'redux/actions/baseActions'

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const submitRegisterStep1 = (formValue) => {
  return async (dispatch) => {
    try {
      dispatch(baseActions.genRequestLoadingAction())
      console.log(JSON.stringify(formValue, 0, 2))
      await sleep(2000)
    } catch (error) {
      baseActions.commonHandleError(error, dispatch)
    } finally {
      dispatch(baseActions.genRequestFinishAction())
    }
  }
}
