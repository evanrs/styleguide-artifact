import _ from 'lodash';
import styled, { css } from 'styled-components';
import mapp from '@evanrs/map-props';

export const { marginPaddingProps, mapMarginPaddingProps } = (() => {
  const [margin, padding] = ['margin', 'padding'].map(prop =>
    [
      ['', 'left', 'right', 'top', 'bottom'],
      ['x', 'left', 'right'],
      ['l', 'left'],
      ['r', 'right'],
      ['y', 'top', 'bottom'],
      ['t', 'top'],
      ['b', 'bottom'],
    ].reduce((acc, [axis, ...variants]) => {
      [0, 0.5, 1, 2, 3].forEach((value, index) => {
        const group = `${prop[0]}${axis}`;
        const name = `${group}${index}`;
        value = css`
          ${variants.map(
            variant =>
              css`
                ${prop + '-' + variant}: ${value}rem;
              `
          )};
        `;

        acc[group] = acc[group] || {};
        acc[name] = acc[group][index] = value;
      });

      return acc;
    }, {})
  );

  margin.mx.auto = css`
    margin-left: auto;
    margin-right: auto;
  `;
  margin.ml.auto = css`
    margin-left: auto;
  `;
  margin.mr.auto = css`
    margin-right: auto;
  `;

  const marginPaddingProps = { ...margin, ...padding };

  return {
    marginPaddingProps,
    mapMarginPaddingProps: mapp(marginPaddingProps),
  };
})();

export default mapMarginPaddingProps;
