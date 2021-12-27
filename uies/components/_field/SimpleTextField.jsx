import React from 'react'
import spinnerField from 'public/spinner-field.gif'
import Image from 'next/image'
import 'styles/_text_field.module.scss'
import classNames from 'classnames'

export default function SimpleTextField({
  input,
  label,
  placeholder,
  type,
  required,
  loading,
  disabled,
  meta: { touched, error, warning },
}) {
  return (
    <div className="form-group text-field-example">
      <label htmlFor="labelFormInput">
        <span>{label}</span>
        {required && <span className="text-danger ml-2">*</span>}
      </label>
      <input
        className={classNames(
          'form-control',
          touched && error && 'error',
          touched && !error && !warning && 'success'
        )}
        placeholder={placeholder}
        type={type}
        disabled={disabled || loading}
        {...input}
      />
      {loading && (
        <Image src={spinnerField} alt="spinner" className="spinner" />
      )}
      {touched &&
        ((error && <i className="text-danger font-weight-bold">{error}</i>) ||
          (warning && <i className="text-warning">{warning}</i>))}
    </div>
  )
}
