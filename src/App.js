import React, { Fragment } from 'react';
import styled from 'styled-components';

import { ThemeProvider } from './theme';
import Block from './styled/Block';
import Story from './story';

export default class App extends React.Component {
  state = {
    themeName: 'light',
  };

  switchTheme = () =>
    this.setState(({ themeName }) => ({
      themeName: themeName === 'light' ? 'dark' : 'light',
    }));

  interval = true || setInterval(this.switchType, 5000);

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { themeName } = this.state;

    return (
      <ThemeProvider type={themeName}>
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

const SectionHeader = styled.h2`
  margin: 1rem 0;

  min-width: 100%;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row wrap;
  width: 100%;
  height: max-content;
  min-height: 100%;
  padding: 0 2rem;
  margin: 2rem 0;
  overflow: hidden;
`;

const Column = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-flow: column wrap;
  width: 100%;
  height: max-content;
  min-height: 100%;
  overflow: hidden;
`;

const EmojiText = styled.span`
  font-size: 3rem;
`;
