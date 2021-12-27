import React from 'react'
import 'styles/_loading.module.scss'

export default function Loading({ visible }) {
  return visible === true ? (
    <div className="loading-root position-fixed">
      <div className="spinner-border progress" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  ) : null
}
