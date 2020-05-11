import { buildTheme } from '@ivoryio/kogaio/utils'
const kogaioTheme = buildTheme({})

const {
  borders,
  breakpoints,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  radii,
  shadows,
  space,
  textStyles
} = kogaioTheme

export const BORDERS = [...borders]

export const BREAKPOINTS = {
  ...breakpoints
}

export const COLORS = {
  accent: 'var(--etvas-accent-color, #ef6319)',
  brand: 'var(--etvas-brand-color, #015294)',
  brandFade: 'rgba(var(--etvas-brand-color), .3)',
  accentFade: 'rgba(var(--etvas-accent-color), .3)',
  text: 'var(--etvas-text-color, #000000)',
  lighterText: 'var(--etvas-lighter-text-color, #35373b)',
  error: '#FF0000',
  disabled: '#BABABC',
  outline: '#A0AAB2',
  background: '#FBFDFF',
  white: '#FFFFFF'
}

// #region font
export const FONTS = {
  primary:
    'Open Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, sans-serif',
  complementary:
    'Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, sans-serif'
}
export const FONT_WEIGHTS = {
  ...fontWeights,
  lighter: '300',
  bold: '600',
  black: '900'
}
export const FONT_SIZES = [...fontSizes]
export const LETTER_SPACINGS = {
  ...letterSpacings
}
export const LINE_HEIGHTS = {
  ...lineHeights,
  buttonLabel: '14px'
}
export const TEXT_STYLES = {
  ...textStyles,
  capitalize: {
    ...textStyles.caps,
    'text-transform': 'capitalize'
  }
}
// #endregion

export const RADII = {
  ...radii
}
export const SHADOWS = {
  ...shadows,
  etvasCard: '0px 2px 4px rgba(19, 51, 77, 0.15)'
}
export const SPACE = [...space]
