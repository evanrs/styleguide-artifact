import React, { Fragment } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { themes } from './theme';

import Block from './styled/Block';
import Story from './story';

export default class App extends React.Component {
  static getDerivedStateFromProps(
    props,
    { themeName, [themeName]: nextTheme }
  ) {
    if (nextTheme && nextTheme.name === themeName) {
      return null;
    }

    return {
      [themeName]: themes[themeName],
    };
  }

  state = {
    themeName: 'light',
  };

  switchTheme = () =>
    this.setState(({ themeName }) => ({
      themeName: themeName === 'light' ? 'dark' : 'light',
    }));

  render() {
    const { themeName, [themeName]: currentTheme } = this.state;

    return (
      <ThemeProvider theme={currentTheme}>
        <Root>
          <Story themeName={themeName} switchTheme={this.switchTheme} />
        </Root>
      </ThemeProvider>
    );
  }
}

export const Root = styled(Block)`
  min-height: 100%;
`;
