import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { useField } from 'formik'
import { Input } from '../Input'

import { fieldShape } from './shapes'
import { makeId } from './utils'

export const TextField = forwardRef((props, ref) => {
  const [field, meta] = useField(props)
  const id = props.id || makeId('field', props.name || 'input')

  return (
    <Input
      {...props}
      {...field}
      id={id}
      error={meta.touched && meta.error}
      ref={ref}
    />
  )
})

TextField.propTypes = {
  ...fieldShape,
  type: PropTypes.string,
  placeholder: PropTypes.node,
  required: PropTypes.bool
}

TextField.defaultProps = {
  type: 'text'
}
