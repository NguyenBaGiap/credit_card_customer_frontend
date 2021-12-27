import React from 'react'
import { Field, reduxForm } from 'redux-form'
import SimpleTextField from 'uies/components/_field/SimpleTextField'

function EkycStep01Form(props) {
  const { handleSubmit } = props
  return (
    <form className="container mt-3" onSubmit={handleSubmit}>
      <div className="col-md-3 col-sm-12">
        <Field
          name="mobileNumber"
          label="Điện thoại *"
          component={SimpleTextField}
        />
      </div>
      <div className="col-md-12 pt-sm-3 pt-md-3">
        <button type="submit" className="btn btn-primary">
          Tiếp tục
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'StepFirstForm',
  destroyOnUnmount: true,
  enableReinitialize: true,
})(EkycStep01Form)
