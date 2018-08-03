import _ from 'lodash';
import React from 'react';
import styled, { css, ThemeProvider, withTheme } from 'styled-components';
import mapProps from '@evanrs/map-props';

import { resolvesColor } from '../theme/tools';
import { mapMarginPaddingProps, userSelectButton } from './rules';

const defaults = {
  backgroundColor: resolvesColor(
    'button.backgroundColor',
    resolvesColor('palette.accent', 'textColor')
  ),
  textColor: resolvesColor(
    'button.textColor',
    resolvesColor('palette.textColor', 'textColor')
  ),
};

const primary = {
  backgroundColor: resolvesColor(
    'button.primary.backgroundColor',
    'button.backgroundColor'
  ),
  textColor: resolvesColor('button.primary.textColor', 'button.textColor'),
};

const secondary = {
  backgroundColor: resolvesColor(
    'button.secondary.backgroundColor',
    'backgroundColor'
  ),
  textColor: resolvesColor('button.secondary.textColor', 'button.textColor'),
};

const RESOLVERS = { default: defaults, primary, secondary };

const resolves = {
  bg: resolvesColor('backgroundColor'),
  fg: resolvesColor('textColor'),
};

@withTheme
class Button extends React.Component {
  static defaultPropTypes = {
    intent: 'primary',
  };

  // static getDerivedStateFromProps({ intent, outline }, state) {
  //   if (intent === state.intent) {
  //     return null;
  //   }
  //
  //   let { backgroundColor, textColor } = RESOLVERS[intent] || {
  //     backgroundColor: resolvesColor(`${intent}.backgroundColor`),
  //     textColor: resolvesColor(`${intent}.textColor`),
  //     active: {
  //       backgroundColor: resolvesColor(`${intent}.active.backgroundColor`),
  //     },
  //     disabled: {
  //       backgroundColor: resolvesColor(`${intent}.disabled.backgroundColor`),
  //     },
  //   };
  //
  //   return {
  //     intent,
  //     backgroundColor: outline ? resolvesColor('transparent') : backgroundColor,
  //     textColor: outline ? backgroundColor : textColor,
  //   };
  // }

  state = {};

  resolveTheme = providedTheme => {
    const { intent, outline, active, disabled } = this.props;
    let {
      backgroundColor,
      textColor,
      button,
      button: theme,
      button: { [intent || 'primary']: palette = theme },
      colors,
    } = providedTheme;

    if (active) {
      palette = palette.active || theme.active;
    }

    if (disabled) {
      palette = palette.disabled || theme.disabled;
    }

    if (outline) {
      palette = {
        backgroundColor: colors.transparent,
        textColor: palette.backgroundColor,
      };
    }

    // if (!palette) {
    //   debugger;
    // }
    //
    // if (outline) {
    //   debugger;
    // }

    return {
      // ...providedTheme,
      // cake: 'could be pie',
      ...palette,
      palette,
    };
  };

  render() {
    const { theme } = this.props;

    return (
      <ThemeProvider theme={this.resolveTheme}>
        <StyledButton
        //  {...this.props}
        />
      </ThemeProvider>
    );
  }
}

export const mapButtonProps = mapProps({
  pill: css`
    &,
    &::before,
    &::after {
      border-radius: 2rem;
    }
  `,

  width: {
    auto: css`
      width: max-content;
      min-width: min-content;
      max-width: max-content;
    `,
    full: css`
      min-width: 100%;
    `,
  },

  intent: {
    primary: css`
      background-color: ${primary.backgroundColor};
      color: ${primary.textColor};
      background-color: ${primary.backgroundColor};
      color: ${primary.textColor};
    `,

    secondary: css`
      background-color: ${secondary.backgroundColor};
      color: ${secondary.textColor};
    `,

    good: css`
      background-color: ${resolvesColor('intent.good.color')};
      color: ${resolvesColor('intent.good.textColor')};
    `,

    aware: css`
      background-color: ${resolvesColor('intent.aware.color')};
      color: ${resolvesColor('intent.aware.textColor')};
    `,

    bad: css`
      background-color: ${resolvesColor('intent.bad.color')};
      color: ${resolvesColor('intent.bad.textColor')};
    `,

    default(intent, propName, { invert, theme }) {
      let { color, textColor } = theme.intent[intent];

      if (invert || theme.invert) {
        [textColor, color] = [color, textColor];
      }

      return css`
        background-color: ${color};
        color: ${textColor};
      `;
    },
  },

  outline: (value, key, props) => {
    console.log(props.theme.backgroundColor);

    return css`
      position: relative;
      z-index: 1;

      background-color: transparent;

      box-shadow: 0 0 0 2px currentColor inset;
    `;
  },

  palette: {
    default(palette, propName, { invert, theme }) {
      let { color, textColor } = theme.palettes[palette] || {};

      if (invert || theme.invert) {
        [textColor, color] = [color, textColor];
      }

      return css`
        background-color: ${color};
        color: ${textColor};
      `;
    },
  },

  center: css`
    margin-left: auto;
    margin-right: auto;
  `,

  // FIXME: why disabled button boo works?
  disabled: css`
    pointer-events: none;
    opacity: 50%;
  `,

  caps: {
    none: css`
      oitext-transform: none;
      text-transform: none;
      letter-spacing: initial;
      font-weight: 600;
    `,
    [false]: css`
      text-transform: none;
      text-transform: none;
      letter-spacing: initial;
      font-weight: 600;
    `,
    false: css`
      text-transform: none;
      text-transform: none;
      letter-spacing: initial;
      font-weight: 600;
    `,
  },
});

export const StyledButton = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: min-content;
  min-width: 4rem;
  max-width: 16rem};
  min-height:  1.75rem;
  max-height: 1.75rem;

  margin-top: 0.375rem;
  margin-bottom: 0.375rem;

  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;

  line-height: 1rem;
  font-size: 0.6875rem;
  font-weight: 600;
  overflow: hidden;

  &,
  &::before,
  &::after {
    border-radius: 0.25rem;
  }


  background-color: ${defaults.backgroundColor};
  color: ${defaults.textColor};

  ${mapButtonProps};
  ${mapMarginPaddingProps};
  ${userSelectButton}
`;

export const ButtonGroup = styled.div`
  ${StyledButton} {
    min-width: 1rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    border-radius: 0;
  }

  ${StyledButton}:first-child {
    border-radius: 0.25rem 0 0 0.25rem;
    padding-left: 0.75rem;
  }
  ${StyledButton} + ${StyledButton}:last-child {
    border-radius: 0 0.25rem 0.25rem 0;
    padding-right: 0.75rem;
  }

  ${mapProps({
    pill: css`
      ${StyledButton}:first-child {
        border-radius: 2rem 0 0 2rem;
        padding-left: 0.875rem;
      }
      ${StyledButton} + ${StyledButton}:last-child {
        border-radius: 0 2rem 2rem 0;
        padding-right: 0.875rem;
      }
    `,
  })};
`;

export default Button;
