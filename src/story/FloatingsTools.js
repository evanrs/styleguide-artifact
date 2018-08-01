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
    <FloatingTools px={3} py={1}>
      <Label>Switch to {isDark ? 'Light' : 'Dark'} mode </Label>
      <Switch
        onChange={switchTheme}
        checked={isDark}
        onColor={primary[4]}
        onHandleColor={primary[1]}
        offColor={secondary.base}
        offHandleColor={secondary[2]}
        handleDiameter={18}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow={`0 .5px 1.5px 1px rgba(0, 0, 30, ${
          isDark ? '0.25' : '0.25'
        })`}
        activeBoxShadow="0 1px 1.5px rgba(0, 0, 30, 0.25)"
        height={12}
        width={32}
      />
    </FloatingTools>
  );
};

const FloatingTools = styled(Block).attrs({
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
`;

const Label = styled.label`
  text-transform: uppercase;
  letter-spacing: 0.0625rem;
  font-size: 0.5rem;
  padding-right: 0.5rem;
  text-align: right;
`;
