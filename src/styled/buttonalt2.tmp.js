import _ from 'lodash';
import React from 'react';
import styled, { css, ThemeProvider, withTheme } from 'styled-components';
import mapProps from '@evanrs/map-props';

import { resolvesColor } from '../theme/tools';
import { mapMarginPaddingProps, userSelectButton } from './rules';

const resolves = {
  bg: resolvesColor('backgroundColor'),
  fg: resolvesColor('textColor'),
};

class ButtonThemeProvider extends React.Component {
  static defaultProps = {
    intent: 'primary',
  };

  resolveTheme = providedTheme => {
    const { intent, outline, active, disabled } = this.props;
    let {
      backgroundColor,
      textColor,
      button: root,
      button: theme,
      button: { [intent]: palette },
      colors,
    } = providedTheme;

    if (active) {
      palette = { ...palette, ...palette.active };
    }

    if (disabled) {
      // palette = { ...palette, ...palette.disabled };
    }

    if (outline) {
      palette = {
        backgroundColor: colors.transparent,
        textColor: palette.backgroundColor,
      };
    }

    return {
      // ...providedTheme,
      ...theme,
      ...theme.primary,
      ...palette,
      // palette,
    };
  };

  render() {
    const { children } = this.props;

    return <ThemeProvider theme={this.resolveTheme}>{children}</ThemeProvider>;
  }
}

class Button extends React.Component {
  static defaultProps = {
    intent: 'primary',
  };

  render() {
    const { theme, active, disabled, outline, ...props } = this.props;

    return (
      <ButtonThemeProvider {...this.props}>
        <StyledButton
          //
          // {...this.props}
          {...{ active, disabled, outline }}
          children={this.props.children}
        />
      </ButtonThemeProvider>
    );
  }
}

export class ButtonGroup extends React.Component {
  static defaultProps = {
    intent: 'primary',
  };

  render() {
    const { theme, active, disabled, outline, ...props } = this.props;

    return (
      <ButtonThemeProvider {...this.props}>
        <StyledButtonGroup
          //
          // {...this.props}
          {...{ active, disabled, outline }}
          children={this.props.children}
        />
      </ButtonThemeProvider>
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

  outline: css`
    position: relative;
    z-index: 1;

    box-shadow: 0 0 0 0.125rem currentColor inset;
  `,

  // FIXME: why disabled button boo works?
  disabled: css`
    pointer-events: none;
    opacity: 0.5;
  `,
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

  background-color: ${resolvesColor(
    //
    'button.backgroundColor',
    'backgroundColor'
  )};
  color: ${resolvesColor(
    //
    'button.textColor',
    'textColor'
  )};

  ${mapButtonProps};
  ${mapMarginPaddingProps};
  ${userSelectButton}
`;

export const StyledButtonGroup = styled.div`
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
