import _ from 'lodash';
import React from 'react';
import styled, { css } from 'styled-components';

import { colors } from '../theme';
import { resolvesColor } from '../theme/tools';
import Block from '../styled/Block';

export const Column = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-flow: column wrap;
  width: 100%;
  height: max-content;
  min-height: 100%;
  overflow: hidden;
`;

export const Section = styled(Block).attrs({ px: 3 })`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;

  min-height: ${({ mh = 4 }) => mh * 5}rem;
  margin: 0;

  background-color: ${({ backgroundColor: color, theme }) => {
    color = color === true ? 'backgroundColor' : color;

    return color
      ? theme[color] || theme.colors[color] || _.get(theme, color)
      : '';
  }};

  color: ${({ textColor: color, theme }) => {
    color = color === true ? 'textColor' : color;

    return color
      ? theme[color] || theme.colors[color] || _.get(theme, color)
      : '';
  }};
`;
export const SectionBody = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 60rem;
`;

export class SectionBlock extends React.Component {
  state = {};
  componentDidCatch() {
    this.setState({ error: true });
  }

  render() {
    const { children, ...props } = this.props;
    if (this.state.error) {
      return <div>oopsies</div>;
    }

    return (
      <Section {...props}>
        <SectionBody>{children}</SectionBody>
      </Section>
    );
  }
}

// export const SectionBlock = ({ children, ...props }) => (
//   <Section {...props}>
//     <SectionBody>{children}</SectionBody>
//   </Section>
// );

export const Root = styled.div`
  ${Section} + ${Section} {
    margin-top: 2rem;
  }
`;

export const Header = styled.div`
  margin: 1rem 0 1rem;

  min-width: 100%;
  font-weight: 500;
  font-size: 24px;
  letter-spacing: 0;
`;
