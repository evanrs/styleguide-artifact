import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { colors, palettes } from './colors';

export class ThemeProvider extends React.Component {
  static defaultProps = {
    type: 'light',
  };

  static getDerivedStateFromProps({ type }, state) {
    if (type === state.type) {
      return;
    } else if (state[type]) {
      return state[type];
    }

    const palt = palettes[type];
    const {
      primary,
      secondary,
      backgroundColor = primary.base,
      textColor = secondary.base,
      accents = palettes.accents,
      ...rest
    } = palt;

    const current = {
      type,
      primary,
      secondary,
      backgroundColor,
      textColor,
      accents,
      intents: {},
      // intents: {
      //   default: {
      //     backgroundColor: accents.accent.base,
      //   },
      //   good: {
      //     backgroundColor: accents.good.base,
      //   },
      //   aware: {
      //     backgroundColor: accents.aware.base,
      //   },
      //   bad: {
      //     backgroundColor: accents.bad.base,
      //   },
      // },
    };

    return { ...current, [type]: current };
  }

  state = {};

  render() {
    return <StyledThemeProvider {...this.props} theme={this.state} />;
  }
}
