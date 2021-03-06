import React, {
  forwardRef,
  useCallback,
  useMemo,
  useRef,
  useState
} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import propTypes from '@styled-system/prop-types'
import css from '@styled-system/css'
import { Icon } from '../Icon'
import { Typography, typography } from '../Typography'
import { Flex, Space } from '@ivoryio/kogaio'

import { PasswordToggler } from './PasswordToggler'
import { ErrorMessage } from './ErrorMessage'

export const Input = forwardRef(
  (
    {
      autoComplete,
      autoFocus,
      disabled,
      error,
      icLeft,
      icRight,
      id,
      label,
      name,
      noBottomSpace,
      onChange,
      passwordView,
      placeholder,
      readOnly,
      required,
      type,
      valid,
      value,
      variant,
      ...rest
    },
    ref
  ) => {
    const inputRef = useRef()
    const [inputType, setInputType] = useState(type)

    const inputVariant = useMemo(() => {
      if (disabled) return 'disabled'
      else if (error) return 'error'
      else if (valid) return 'valid'
      return variant
    }, [disabled, error, valid, variant])

    const resetInputType = useCallback(() => setInputType(type), [type])

    const togglePassword = useCallback(
      ev => {
        const elRef = ref || inputRef
        if (document.activeElement !== elRef.current) elRef.current.focus()
        if (inputType.includes('password')) {
          setInputType('text')
        } else {
          resetInputType()
        }
        if (ev) {
          ev.preventDefault()
        }
      },
      [inputType, ref, inputRef, resetInputType]
    )

    return (
      <Flex flexDirection='column' hasLabel={label} width={1} {...rest}>
        {label ? (
          <Typography
            as='label'
            htmlFor={id}
            variant='inputLabel'
            width='fit-content'>
            {label} {required ? '*' : ''}
          </Typography>
        ) : null}
        <Flex alignItems='center' position='relative' width='100%'>
          <StyledInput
            autoComplete={autoComplete}
            autoFocus={autoFocus}
            disabled={readOnly || disabled}
            error={error}
            hasLabel={label}
            hasIcLeft={icLeft}
            hasIcRight={icRight}
            id={id}
            name={name}
            onChange={onChange}
            placeholder={readOnly ? '' : placeholder}
            readOnly={readOnly}
            ref={ref || inputRef}
            required={required}
            type={inputType}
            value={value}
            variant={inputVariant}
            {...rest}
          />
          {icLeft ? (
            <Icon
              fontSize={3}
              left={2}
              name={icLeft}
              pointerEvents='none'
              position='absolute'
              tabIndex='-1'
            />
          ) : null}
          <Flex pointerEvents='auto' position='absolute' right={2}>
            {icRight ? (
              <Space mr={1}>
                <Icon fontSize={3} name={icRight} />
              </Space>
            ) : null}
            {type === 'password' && value ? (
              <PasswordToggler
                error={!!error}
                inputType={inputType}
                onDrag={resetInputType}
                tabIndex='-1'
                onToggle={togglePassword}
                viewOption={passwordView}
              />
            ) : null}
          </Flex>
        </Flex>
        <ErrorMessage error={error} preserveSpace={!noBottomSpace} />
      </Flex>
    )
  }
)

const StyledInput = styled.input(
  css({
    ...typography.labelSmall,
    display: 'block',
    width: '100%',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'outline',
    borderRadius: 8,
    outline: 'none',
    color: 'text',
    padding: 3,
    ':hover, :focus': {
      borderWidth: 1,
      borderStyle: 'solid'
    }
  }),
  ({ error }) =>
    error
      ? css({
          color: 'error',
          borderColor: 'error'
        })
      : null,
  ({ disabled }) =>
    disabled
      ? css({
          opacity: 0.5
        })
      : null
)

Input.propTypes = {
  ...propTypes.inputStyle,
  autoComplete: PropTypes.string,
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.node,
    PropTypes.string
  ]),
  icLeft: PropTypes.string,
  icRight: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.node,
  name: PropTypes.string,
  /** dummy space added for consistent spacing with validated inputs.
   *
   * remove space by setting this to true */
  noBottomSpace: PropTypes.bool,
  onChange: PropTypes.func,
  passwordView: PropTypes.oneOf(['peek', 'toggle']),
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  type: PropTypes.string,
  valid: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ])
}

Input.defaultProps = {
  autoFocus: false,
  minHeight: 40,
  noBottomSpace: false,
  passwordView: 'peek',
  readOnly: false,
  type: 'text',
  value: '',
  variant: 'default'
}

Input.displayName = 'Input'
/** @component */
