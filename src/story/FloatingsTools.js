import React from 'react';
import styled from 'styled-components';
import { MDXProvider } from '@mdx-js/tag';
import Switch from 'react-switch';

import { colors, palettes } from '../theme/colors';

import Block from '../styled/Block';

export default ({ themeName, switchTheme }) => {
  const isDark = themeName === 'dark';

  const { primary, secondary } = palettes[themeName];

  return (
    <Root>
      <FloatingTools>
        <Label>Switch to {isDark ? 'Light' : 'Dark'} mode </Label>
        <Switch
          className="switch"
          onChange={switchTheme}
          checked={isDark}
          checkedIcon={false}
          uncheckedIcon={false}
          height={12}
          width={32}
          handleDiameter={18}
          // alternate
          onColor={primary[4]}
          onHandleColor={secondary[3]}
          offColor={secondary[4]}
          offHandleColor={secondary[3]}
          boxShadow={`0 1px 2px 1px rgba(0, 0, 0, ${isDark ? '0.15' : '0.3'})`}
          activeBoxShadow="0 0 0 4px rgba(0, 0, 30, 0.2)"
          //
          offColor={secondary[4]}
          offHandleColor={secondary.base}
          onColor={primary.base}
          onHandleColor={primary[2]}
        />
      </FloatingTools>
    </Root>
  );
};

const Root = styled(Block).attrs({
  backgroundColor: 'primary.2',
})`
  /* min-height: 2.5rem;
  max-height: 2.5rem; */
`;

const FloatingTools = styled(Block).attrs({
  px: 3,
  backgroundColor: 'primary.1',
  textColor: 'secondary.3',
})`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  opacity: 0.85;
  min-height: 2.5rem;
  max-height: 2.5rem;
`;

const Label = styled.label`
  text-transform: uppercase;
  letter-spacing: 0.0625rem;
  font-size: 0.5rem;
  padding-right: 0.5rem;
  text-align: right;
`;
