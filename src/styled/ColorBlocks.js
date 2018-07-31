import _ from 'lodash';
import React from 'react';
import styled from 'styled-components';
import mapp from '@evanrs/map-props';

import { palettes, colors } from '../theme/colors';
import Block from './Block';

const { spectrum, accents, light, dark } = palettes;

console.log(spectrum);

const sort = ({ base, ...colors }) => {
  return _.reduce(
    colors,
    (acc, color, name) => {
      let [type, level, notch] = [...name.split(''), 0];
      let key = Number(`${level}${notch}`);

      acc[
        /d/i.test(type)
          ? 'dark'
          : /l/i.test(type)
            ? 'light'
            : /a/i.test(type)
              ? 'alpha'
              : 'unknown'
      ][key] = {
        color,
        name,
      };

      return acc;
    },
    {
      base,
      dark: {},
      light: {},
      alpha: {},
      unknown: {},
    }
  );
};

const ColorBlocks = props => {
  const { brand, offblack, blue, red, yellow, green } = spectrum;
  return (
    <React.Fragment>
      {_.map({ brand, offblack, blue, red, yellow, green }, (color, name) => {
        const { base, light, dark, unknown } = sort(color);

        return (
          <div key={name}>
            {_.values(light)
              .reverse()
              .map(({ color, name }, key) => {
                return (
                  <Swatch key={name} backgroundColor={color}>
                    <SwatchName>{name}</SwatchName>
                  </Swatch>
                );
              })}
            <Swatch backgroundColor={base}>
              <SwatchName>{name}</SwatchName>
              <SwatchColor>{base}</SwatchColor>
            </Swatch>
            {_.map(dark, ({ color, name }, key) => {
              return (
                <Swatch key={name} backgroundColor={color}>
                  <SwatchName>{name}</SwatchName>
                </Swatch>
              );
            })}
          </div>
        );
      })}
    </React.Fragment>
  );
};

const Swatch = styled(Block).attrs({ p: 2 })`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-flow: column nowrap;
  min-height: 5rem;
  max-height: 5rem;
  min-width: 7rem;
  max-width: 7rem;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.85);
`;

const SwatchName = styled.div`
  font-family: Lato, sans-serif;
  font-weight: bold;
  font-size: 0.825rem;
  text-transform: capitalize;
`;

const SwatchColor = styled.div`
  font-size: 0.875rem;
  text-transform: uppercase;
`;

export default ColorBlocks;
