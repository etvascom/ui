const StyleGuide = {
  transparent: 'transparent',

  white100: '#FFFFFF',
  white200: '#F6F7F9',
  white300: '#E7EAF0',

  gray100: '#FEFEFE',
  gray200: '#F1F4F8',
  gray300: '#D8DDE8',
  gray400: '#A1A7B6',
  gray500: '#898FA1',
  gray600: '#E5E7EE',
  gray700: '#CACEDF',
  gray800: '#9598A6',
  gray900: '#383A43',
  gray1000: '#202331',

  black100: '#070A15',
  black200: '#1A2239',
  black300: '#425179',
  black400: '#536083',

  yellow100: '#F7D935',
  red100: '#F72A2A',
  green100: '#1DC06D',
  green200: '#41B853'
}

export default {
  accent: 'rgb(var(--etvas-accent-color))',
  brand: 'rgb(var(--etvas-brand-color))',
  brandLight: 'var(--etvas-brand-color-light)',
  brandLighter: 'var(--etvas-brand-color-lighter)',
  brandLightest: 'var(--etvas-brand-color-lightest)',
  brandDark: 'var(--etvas-brand-color-dark)',
  brandDarkest: 'var(--etvas-brand-color-darkest)',
  brandFade: 'rgba(var(--etvas-brand-color), .3)',
  accentFade: 'rgba(var(--etvas-accent-color), .3)',
  text: 'rgb(var(--etvas-text-color))',
  lighterText: 'rgb(var(--etvas-lighter-text-color))',
  error: StyleGuide.red100,
  warning: StyleGuide.yellow100,
  success: StyleGuide.green100,
  // Old colors prior to refactoring:
  // disabled: '#BABABC',
  // divider: '#F2F2F2',
  // outline: '#A0AAB2',
  // lighterOutline: '#D4DEE8',
  // background: '#FBFDFF',
  // widgetBackground: '#F7FAFC',
  // modalStroke: '#D4DEE8',
  // skeleton: '#E4EBF0',
  // dropShadow: 'rgba(19, 51, 77, .3)',
  // whiteShadow: 'rgba(255, 255, 255, .75)',
  // dark: '#343434',
  // positive: '#27ae60',
  // positiveFade: '#87e8af',
  disabled: StyleGuide.gray400,
  divider: StyleGuide.gray200,
  outline: StyleGuide.gray400,
  lighterOutline: StyleGuide.gray300,
  background: StyleGuide.gray200,
  widgetBackground: StyleGuide.gray200,
  modalStroke: StyleGuide.gray300,
  skeleton: StyleGuide.gray400,
  dropShadow: StyleGuide.black200,
  whiteShadow: StyleGuide.white200,
  dark: StyleGuide.gray900,
  positive: StyleGuide.green200,
  positiveFade: StyleGuide.green200,
  white: StyleGuide.white100,
  transparent: StyleGuide.transparent,
  inputGray: StyleGuide.gray300,
  backgroundWhite: StyleGuide.white,
  backgroundLightGray: StyleGuide.gray100,
  backgroundGray: StyleGuide.gray200,
  backgroundCustomers: StyleGuide.gray200,
  backgroundInputGray: StyleGuide.gray200,
  inputBorderGray: StyleGuide.gray300,
  inputIcon: StyleGuide.gray400,
  textInputDisabled: StyleGuide.gray400,
  backgroundDisabled: StyleGuide.gray400,
  textInputFocused: StyleGuide.gray400,
  textInputPlaceholder: StyleGuide.gray500,
  textLabelDefault: StyleGuide.black400,
  textCardTitle: StyleGuide.black200,
  textInputActive: StyleGuide.black100,
  baseWhite: StyleGuide.white,
  formsLightBackground: StyleGuide.gray200,
  formsInputBorder: StyleGuide.gray200,
  formsPlaceholder: StyleGuide.gray700,
  formsLabel: StyleGuide.gray800,
  uncheckedCheckbox: StyleGuide.gray800,
  baseGray: StyleGuide.gray900,
  baseBlack: StyleGuide.gray1000,
  textDefault: StyleGuide.black400
}
