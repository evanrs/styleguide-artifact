import React from 'react';
import styled from 'styled-components';

import * as theme from './theme';

import ColorBlocks from './styled/ColorBlocks';

export default () => (
  <Root>
    <EmojiText>{/* 🐱 */}</EmojiText>
    <ColorBlocks />
  </Root>
);

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  width: 100%;
  height: 100%;
`;

const EmojiText = styled.span`
  font-size: 3rem;
`;
