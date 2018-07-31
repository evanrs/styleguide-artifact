import React, { Fragment } from 'react';
import styled from 'styled-components';

import { ThemeProvider } from './theme';
import * as theme from './theme';
import Buttons from './story/Buttons';
import Swatches from './story/Swatches';
import Block from './styled/Block';

export default () => (
  <ThemeProvider type="light">
    <Fragment>
      <Buttons />
      <Swatches />
    </Fragment>
  </ThemeProvider>
);

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
