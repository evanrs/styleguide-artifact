import React from 'react';
import styled, { css } from 'styled-components';
import mapp from '@evanrs/map-props';

import Block from './Block';

import { mapMarginPaddingProps, userSelectButton } from './rules';

export const Button = styled.button`
  text-align: left;
  white-space: nowrap;
  border: 0;
  outline: 0;
  display: inline-block;
  font-size: 1.5rem;
  line-height: 2rem;
  min-width: 10rem;
  max-width: 30rem;
  padding: 0.5rem 1rem;

  color: #fff;
  border-radius: 0.25rem;
  font-size: 0.9375rem;
  font-weight: 600;
  letter-spacing: 0.025em;
  text-decoration: none;
  transition: all 150ms ease;

  box-shadow: 0 0.25rem 0.375rem rgba(50, 50, 93, 0.11),
    0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.08);

  ${({
    intent: intentType = 'accent',
    theme,
    theme: {
      accents,
      intents,
      accent = accents[intentType],
      intent = intents[intentType] ||
        (accent && {
          backgroundColor: accent.base,
          active: { backgroundColor: accent[1] },
          disabled: { backgroundColor: accent[2] },
        }) ||
        theme,
      button: {
        backgroundColor = intent.backgroundColor,
        textColor = intent.textColor,
        active = intent.active,
        disabled = intent.disabled,
      } = {},
    } = {},
  }) => {
    return css`
      background-color: ${backgroundColor};
      color: ${textColor};

      &:active {
        background-color: ${active.backgroundColor};
      }

      &:disabled {
        background-color: ${disabled.backgroundColor};
      }
    `;
  }};

  ${mapp({
    color: (
      color,
      key,
      { theme, backgroundColor, foregroundColor, textColor }
    ) => {
      let { base, 1: hover, 2: active } = theme.intents[color];

      return css`
        background-color: ${base};
        color: ${textColor};
        &:hover {
          background-color: ${hover.backgroundColor};
        }
        &:active {
          background-color: ${active.backgroundColor};
        }
      `;
    },
  })};

  ${mapMarginPaddingProps};
  ${userSelectButton};
`;

export default Button;
