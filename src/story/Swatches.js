import React from 'react';
import styled from 'styled-components';

import { ThemeProvider } from '../theme';
import * as theme from '../theme';
import Button from '../styled/Button';
import Block from '../styled/Block';

import ColorBlocks from './ColorBlocks';

import { Section, SectionHeader, Column } from './elements';

export default () => (
  <Section>
    <SectionHeader>Swatches</SectionHeader>
    <ColorBlocks />
  </Section>
);
