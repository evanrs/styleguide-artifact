import React from 'react';
import styled from 'styled-components';
import { MDXProvider } from '@mdx-js/tag';

import { Root, Header, SectionBlock } from './elements';
import FloatingTools from './components/FloatingsTools';

import * as headerMDX from './sections/header.mdx';
import * as swatchesMDX from './sections/swatches.mdx';
import * as atomsMDX from './sections/atoms.mdx';
import * as footerMDX from './sections/footer.mdx';

export const components = {
  wrapper: React.Fragment,
  h1: styled(Header)`
    line-height: 3rem;
    font-size: 2.25rem;
    font-weight: bold;
    text-transform: uppercase;
  `,
  h2: styled(Header)`
    line-height: 2rem;
    font-size: 1.5rem;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 0.125rem;
  `,
  h3: styled(Header)`
    line-height: 1.5rem;
    font-size: 1.125rem;
    font-weight: 400;
    letter-spacing: -0.49px;
  `,
  p: styled.p`
    font-size: 0.875rem;
    letter-spacing: -0.38px;
  `,
};

const MDX = ({ default: Content, layout: Layout = SectionBlock, props }) => (
  <Layout {...props}>
    <Content />
  </Layout>
);

export default props => {
  return (
    <MDXProvider components={components}>
      <Root>
        <FloatingTools {...props} />
        <MDX {...headerMDX} />
        <MDX {...swatchesMDX} />
        <MDX {...atomsMDX} />
        <MDX {...footerMDX} />
      </Root>
    </MDXProvider>
  );
};
