import React from 'react';
import styled from 'styled-components';
import { MDXProvider } from '@mdx-js/tag';

import * as headermdx from './header.mdx';
import * as buttonsmdx from './buttons.mdx';
import * as swatchesmdx from './swatches.mdx';
import * as footermdx from './footer.mdx';

import { Root, Header, SectionBlock } from './elements';

export const components = {
  h1: styled(Header)`
    line-height: 3rem;
    font-size: 2.25rem;
    font-weight: bold;
    text-transform: uppercase;
  `,
  h2: styled(Header)`
    line-height: 2rem;
    font-size: 1.5rem;
    font-weight: 500;
    text-transform: uppercase;
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

export default () => (
  <MDXProvider components={components}>
    <Root>
      <MDX {...headermdx} />
      <MDX {...buttonsmdx} />
      <MDX {...swatchesmdx} />
      <MDX {...footermdx} />
    </Root>
  </MDXProvider>
);
