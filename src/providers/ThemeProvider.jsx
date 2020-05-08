import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider as LibThemeProvider } from 'styled-components'
import { mergeDeep, etvasTheme } from 'src/utils'

export const ThemeProvider = ({ children, theme }) => {
  const mergedTheme = useMemo(() => mergeDeep({}, etvasTheme, theme), [theme])

  return <LibThemeProvider theme={mergedTheme}>{children}</LibThemeProvider>
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.object
}

ThemeProvider.defaultProps = {
  theme: {}
}