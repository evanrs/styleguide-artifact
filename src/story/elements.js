import styled from 'styled-components';

export const SectionHeader = styled.h2`
  margin: 1rem 0;

  min-width: 100%;
`;

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
