import styled, { css } from 'styled-components';
import { colors } from '../theme';

export const Section = styled.div`
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

export const SectionBlock = styled.header`
  background-color: ${({ color }) =>
    (color && colors[color]) || colors.transparent};

  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;

  min-height: 20rem;
  margin: 0;
  padding: 0 2rem;
`;

export const Root = styled.div`
  ${SectionBlock} + ${SectionBlock} {
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

export default SectionBlock;
