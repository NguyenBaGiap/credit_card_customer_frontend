import React from 'react'
import EkycStep01Form from 'uies/forms/_ekyc/EkycStep01Form'
import { fetchCustomerSessionRequest } from 'redux/actions/resourceActions'
import { submitRegisterStep1 } from 'redux/actions/_ekyc/registerActions'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'

function EkycStep01Register() {
  const dispatch = useDispatch()
  const router = useRouter()
  React.useEffect(() => {
    dispatch(fetchCustomerSessionRequest())
  }, [])
  const initialValues = useSelector(
    ({ formValuesReducer }) => formValuesReducer
  ).initialValues
  const handleSubmitValues = async (formValues) => {
    await dispatch(submitRegisterStep1(formValues))
    await router.push('/ccs/ekyc/step01-otp')
  }
  return (
    <React.Fragment>
      <EkycStep01Form
        initialValues={initialValues}
        onSubmit={handleSubmitValues}
      />
    </React.Fragment>
  )
}
export default EkycStep01Register
