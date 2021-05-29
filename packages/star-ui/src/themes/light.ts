import { DefaultTheme } from 'styled-components';

const tokens = {
  background: {
    light: "rgb(255, 255, 255)",
    dark: "rgb(31, 41, 55)"
  },
  colors: {
    primary: {
      lighter: 'rgb(219, 235, 255)',
      light: 'rgb(91, 160, 245)',
      base: 'rgb(56, 139, 242)',
      dark: 'rgb(33, 107, 196)',
      darker: 'rgb(17, 77, 150)'
    },
    secondary: {
      lighter: 'rgb(232, 232, 232)',
      light: 'rgb(202, 204, 207)',
      base: 'rgb(160, 164, 168)',
      dark: 'rgb(82, 87, 92)',
      darker: 'rgb(37, 40, 43)'
    },
    success: {
      lighter: 'rgb(225, 247, 232)',
      light: 'rgb(81, 194, 115)',
      base: 'rgb(49, 176, 87)',
      dark: 'rgb(28, 148, 64)',
      darker: 'rgb(15, 117, 46)'
    },
    danger: {
      lighter: 'rgb(252, 227, 228)',
      light: 'rgb(237, 100, 106)',
      base: 'rgb(229, 42, 52)',
      dark: 'rgb(207, 33, 42)',
      darker: 'rgb(161, 19, 26)'
    },
    warning: {
      lighter: 'rgb(255, 240, 209)',
      light: 'rgb(255, 192, 71)',
      base: 'rgb(251, 175, 24)',
      dark: 'rgb(227, 158, 20)',
      darker: 'rgb(201, 140, 16)'
    },
    white: {
      base: 'rgb(255, 255, 255)'
    },
    black: {
      base: 'rgb(37, 40, 43)'
    }
  },
  fontSizes: {
    0: '0',
    1: '10px',
    2: '12px',
    3: '14px',
    4: '16px',
    5: '20px',
    6: '24px',
    7: '32px',
    8: '48px',
    9: '64px',
    10: '72px'
  },
  spaces: {
    0: '0',
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    7: '28px',
    8: '32px',
    9: '36px',
    10: '40px',
    11: '44px',
    12: '48px',
    13: '52px',
    14: '56px',
    15: '60px',
    16: '64px'
  }
};

/**
 * Components
 */
const components = {
  Alert: {
    padding: '12px',
    borderRadius: '2px',
    lineHeight: '1',
    variants: {
      error: {
        color: tokens.colors.danger.dark,
        backgroundColor: tokens.colors.danger.lighter
      },
      warning: {
        color: tokens.colors.warning.dark,
        backgroundColor: tokens.colors.warning.lighter
      },
      success: {
        color: tokens.colors.success.dark,
        backgroundColor: tokens.colors.success.lighter
      },
      info: {
        color: tokens.colors.primary.dark,
        backgroundColor: tokens.colors.primary.lighter
      }
    }
  },
  Badge: {
    padding: '2px 4px',
    borderRadius: '4px',
    variants: {
      primary: {
        color: tokens.colors.white.base,
        backgroundColor: tokens.colors.primary.base
      },
      secondary: {
        color: tokens.colors.secondary.dark,
        backgroundColor: tokens.colors.secondary.lighter
      },
      success: {
        color: tokens.colors.white.base,
        backgroundColor: tokens.colors.success.base
      },
      danger: {
        color: tokens.colors.white.base,
        backgroundColor: tokens.colors.danger.base
      },
      warning: {
        color: tokens.colors.white.base,
        backgroundColor: tokens.colors.warning.base
      }
    }
  },
  Button: {
    display: 'inline-flex',
    cursor: 'pointer',
    borderWidth: '1px',
    borderRadius: '4px',
    ':disabled': {
      cursor: 'not-allowed',
      opacity: '0.4',
      boxShadow: 'none'
    },
    sizes: {
      small: {
        paddingBlock: tokens.spaces[2],
        paddingInline: tokens.spaces[3],
        fontSize: tokens.fontSizes[2]
      },
      medium: {
        paddingBlock: tokens.spaces[2],
        paddingInline: tokens.spaces[3],
        fontSize: tokens.fontSizes[4]
      },
      large: {
        paddingBlock: tokens.spaces[2],
        paddingInline: tokens.spaces[3],
        fontSize: tokens.fontSizes[5]
      }
    },
    variants: {
      primary: {
        color: tokens.colors.white.base,
        backgroundColor: tokens.colors.primary.base,
        borderColor: tokens.colors.primary.base,
        ':hover:enabled': {
          backgroundColor: tokens.colors.primary.dark,
          borderColor: tokens.colors.primary.dark
        }
      },
      secondary: {
        color: tokens.colors.primary.base,
        backgroundColor: tokens.colors.white.base,
        borderColor: tokens.colors.primary.base,
        ':hover:enabled': {
          backgroundColor: tokens.colors.primary.lighter,
          borderColor: tokens.colors.primary.base
        }
      },
      success: {
        color: tokens.colors.white.base,
        backgroundColor: tokens.colors.success.base,
        borderColor: tokens.colors.success.base,
        ':hover:enabled': {
          backgroundColor: tokens.colors.success.dark,
          borderColor: tokens.colors.success.dark
        }
      },
      danger: {
        color: tokens.colors.white.base,
        backgroundColor: tokens.colors.danger.base,
        borderColor: tokens.colors.danger.base,
        ':hover:enabled': {
          backgroundColor: tokens.colors.danger.dark,
          borderColor: tokens.colors.danger.dark
        }
      },
      warning: {
        color: tokens.colors.white.base,
        backgroundColor: tokens.colors.warning.base,
        borderColor: tokens.colors.warning.base,
        ':hover:enabled': {
          backgroundColor: tokens.colors.warning.dark,
          borderColor: tokens.colors.warning.dark
        }
      },
      ghost: {
        color: tokens.colors.primary.base,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        ':hover:enabled': {
          backgroundColor: 'transparent',
          borderColor: 'transparent'
        }
      }
    }
  },
  Card: {
    width: '500px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: tokens.colors.secondary.light,
    padding: '16px',
    boxShadow:
      'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px'
  },
  Grid: {
    display: 'grid',
    alignItems: 'center'
  },
  Heading: {},
  Input: {
    width: '100%',
    padding: '0 8px',
    height: '32px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: tokens.colors.secondary.base,
    borderRadius: '4px',
    backgroundColor: tokens.background.light,
    ':disabled': {
      cursor: 'not-allowed',
      opacity: '0.4',
      boxShadow: 'none'
    },
    '&[aria-invalid="true"]': {
      borderColor: tokens.colors.danger.base
    }
  },
  Skeleton: {
    animationDuration: '1200ms',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
    backgroundImage:
      'linear-gradient(90deg, rgb(221, 221, 221, 0.6) 0%, rgb(221, 221, 221, 0.6) 20%, transparent 50%, rgb(221, 221, 221, 0.6) 80%, rgb(221, 221, 221, 0.6) 100%)',
    backgroundPositionX: '0%',
    backgroundPositionY: '0%',
    backgroundSize: '200% 200%'
  },
  Stack: {
    display: 'flex'
  },
  Text: {
    sizes: {
      0: { fontSize: tokens.fontSizes[0] },
      1: { fontSize: tokens.fontSizes[1] },
      2: { fontSize: tokens.fontSizes[2] },
      3: { fontSize: tokens.fontSizes[3] },
      4: { fontSize: tokens.fontSizes[4] },
      5: { fontSize: tokens.fontSizes[5] },
      6: { fontSize: tokens.fontSizes[6] },
      7: { fontSize: tokens.fontSizes[7] },
      8: { fontSize: tokens.fontSizes[8] },
      9: { fontSize: tokens.fontSizes[9] },
      10: { fontSize: tokens.fontSizes[10] }
    },
    variants: {
      default: {
        color: "inherit"
      },
      primary: {
        color: tokens.colors.primary.base
      },
      secondary: {
        color: tokens.colors.secondary.base
      },
      success: {
        color: tokens.colors.success.base
      },
      danger: {
        color: tokens.colors.danger.base
      },
      warning: {
        color: tokens.colors.warning.base
      }
    }
  },
  TextArea: {
    width: '100%',
    padding: '8px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: tokens.colors.secondary.base,
    borderRadius: '4px',
    backgroundColor: tokens.background.light,
    ':disabled': {
      cursor: 'not-allowed',
      opacity: '0.4',
      boxShadow: 'none'
    },
    '&[aria-invalid="true"]': {
      borderColor: tokens.colors.danger.base
    }
  }
};

const theme: DefaultTheme = {
  tokens,
  components
};

export default theme;
