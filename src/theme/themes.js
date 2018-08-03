import _ from 'lodash';
import { mix, rgb } from 'polished';

import { colors, palettes } from './colors';

const { dark, light, spectrum } = palettes;

export const themes = {
  dark: createTheme(palettes.dark, palettes.accents, {
    button: {
      secondary: {
        textColor: dark.primary.base,
      },
    },
  }),
  light: createTheme(palettes.light, palettes.accents, {}),
};

function createTheme({ primary, secondary }, accents, overrides) {
  return _.merge(
    {
      colors,
      palettes,

      primary,
      secondary,
      accents,

      backgroundColor: primary.base,
      textColor: secondary.base,

      button: {
        backgroundColor: primary.base,
        textColor: secondary.base,

        primary: {
          backgroundColor: accents.accent.base,
          textColor: palettes.light.primary.base,

          active: {
            backgroundColor: accents.accent[1],
          },
          disabled: {
            backgroundColor: accents.accent[2],
          },
        },

        secondary: {
          backgroundColor: secondary.base,
          textColor: primary.base,

          active: {
            backgroundColor: secondary[3],
          },
          disabled: {
            backgroundColor: secondary[4],
          },
        },

        ..._.mapValues(accents, ({ base, [1]: active, [2]: disabled }) => ({
          backgroundColor: base,
          textColor: palettes.light.primary.base,

          active: {
            backgroundColor: active,
          },
          disabled: {
            backgroundColor: disabled,
          },
        })),
      },
    },
    overrides
  );
}
