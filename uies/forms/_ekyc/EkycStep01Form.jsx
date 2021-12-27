import React from 'react'
import { Field, reduxForm } from 'redux-form'

function EkycStep01Form(props) {
  const { initialValues } = props
  console.log(initialValues)
  return (
    <form>
      <span>this is form step 01</span>
    </form>
  )
}

export default reduxForm({
  form: 'StepFirstForm',
  destroyOnUnmount: true,
  enableReinitialize: true,
})(EkycStep01Form)
