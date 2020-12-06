import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { variant as variantBuilder } from 'styled-system'

import { Typography } from '../Typography'
import { default as variants } from './SubLabel.variants'

export const SubLabel = ({ variant, content, preserveSpace }) => (
  <Wrapper preserveSpace={preserveSpace} variant={variant}>
    {content}
  </Wrapper>
)

const Wrapper = styled(Typography)`
  min-height: ${props => (props.preserveSpace ? '16px' : 0)};
  ${variantBuilder({ variants })}
`

SubLabel.propTypes = {
  preserveSpace: PropTypes.bool,
  variant: PropTypes.string,
  content: PropTypes.node.isRequired
}
SubLabel.displayName = 'SubLabel'