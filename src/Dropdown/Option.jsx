import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import css from '@styled-system/css'

import { typography } from '../Typography'

const DropdownItem = ({
  children,
  onSelectItem,
  disabled,
  isSelected,
  value
}) => {
  const _handleClick = () => {
    if (!disabled) {
      onSelectItem(value)
    }
  }

  const hasTouch = useMemo(
    () =>
      'ontouchstart' in document.documentElement ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0,
    []
  )

  return (
    <Option
      role='option'
      onClick={_handleClick}
      selected={isSelected}
      touch={hasTouch}>
      {children}
    </Option>
  )
}

const Option = styled.div(
  css({
    ...typography.labelSmall,
    padding: 3,
    appearance: 'none',
    background: 'transparent',
    display: 'block',
    width: '100%',
    textAlign: 'left',
    border: 'none',
    outline: 'none'
  }),
  ({ touch }) =>
    !touch
      ? css({
          ':hover': {
            backgroundColor: 'brandFade'
          }
        })
      : null,
  ({ selected }) =>
    selected
      ? css({
          backgroundColor: 'brand',
          color: 'white',
          ':hover': {
            backgroundColor: 'brand'
          }
        })
      : null
)

DropdownItem.propTypes = {
  children: PropTypes.node,
  isSelected: PropTypes.bool,
  disabled: PropTypes.bool,
  onSelectItem: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.number
  ])
}

DropdownItem.defaultProps = {
  disabled: false,
  isSelected: false
}

export default DropdownItem
