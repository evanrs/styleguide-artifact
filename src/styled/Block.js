import _ from 'lodash';
import styled, { css } from 'styled-components';
import mapp from '@evanrs/map-props';

import { colors } from '../theme/colors';
import { resolvesColor } from '../theme/tools';

import { userSelectButton, mapMarginPaddingProps } from './rules';

export const Block = styled.div`
  ${({ to, href, onClick, onTouchTap }) =>
    (to || href || onClick || onTouchTap) && userSelectButton};

  transition: background-color ease-out 0.15s;

  background-color: ${({ backgroundColor, theme }) =>
    resolvesColor(backgroundColor, 'backgroundColor')({ theme })};

  color: ${({ textColor, theme }) =>
    resolvesColor(textColor, 'textColor')({ theme })};

  ${mapp({
    width: {
      auto: css`
        width: auto;
        max-width: auto;
      `,
      min: css`
        width: min-content;
        min-width: min-content;
        max-width: min-content;
      `,
      max: css`
        width: max-content;
        min-width: max-content;
        max-width: max-content;
      `,
    },
  })};

  ${mapMarginPaddingProps};
`;

export default Block;
