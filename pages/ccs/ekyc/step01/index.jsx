import React from 'react'
import EkycStep01Form from 'uies/forms/_ekyc/EkycStep01Form'
import { submitRegisterStep1 } from 'redux/actions/_ekyc/registerActions'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'

function EkycStep01Register() {
  const dispatch = useDispatch()
  const router = useRouter()
  React.useEffect(() => {
    //dispatch()
  })
  const handleSubmitValues = (formValues) => {
    dispatch(submitRegisterStep1(formValues))
    router.push('/ccs/ekyc/step01-otp').then((r) => r)
  }
  return (
    <React.Fragment>
      <EkycStep01Form
        // initialValues={initialValues}
        onSubmit={handleSubmitValues}
      />
    </React.Fragment>
  )
}
export default EkycStep01Register
