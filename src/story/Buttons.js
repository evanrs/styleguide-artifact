import React, { Fragment } from 'react';
import styled from 'styled-components';

import { ThemeProvider } from '../theme';
import * as theme from '../theme';
import Button from '../styled/Button';
import ColorBlocks from '../styled/ColorBlocks';
import Block from '../styled/Block';

import { Section, SectionHeader, Column } from './elements';

export default () => (
  <Section>
    <Column>
      <SectionHeader>Buttons</SectionHeader>
      <Button my={2} intent="accent">
        Take an action
      </Button>
      <Button my={2} intent="good">
        We're all good
      </Button>
      <Button my={2} intent="aware">
        Uh oh, be aware
      </Button>
      <Button my={2} intent="bad">
        Something is bad
      </Button>
      <Button my={2} intent="bad" disabled>
        Something is bad
      </Button>
      <Button my={2} disabled>
        We're disabled
      </Button>
    </Column>
  </Section>
);
