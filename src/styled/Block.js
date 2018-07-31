import _ from 'lodash';
import styled, { css } from 'styled-components';

import { colors } from '../theme/colors';

import mapp from '@evanrs/map-props';
import { userSelectButton, mapMarginPaddingProps } from './rules';

export const Block = styled.div`
  ${({ to, href, onClick, onTouchTap }) =>
    (to || href || onClick || onTouchTap) && userSelectButton};

  ${mapp({
    backgroundColor: {
      ..._.mapValues(
        colors,
        color =>
          css`
            background-color: ${color};
          `
      ),
      default: (color, key, { theme }) => {
        return css`
          background-color: ${color};
        `;
      },
    },

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
