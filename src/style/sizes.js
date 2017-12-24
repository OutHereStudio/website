import { css } from 'styled-components';

export const breakpoints = {
  small: 481,
  medium: 768,
  large: 1025,
  xl: 1281,
  xxl: 1601
};

// Iterate through the sizes and create a media template
export const media = Object.keys(breakpoints).reduce((styles, size) => {
  // Makes a rule for the minimum width, using mobile-first approach
  styles[size] = (...args) => css`
    @media (min-width: ${breakpoints[size] / 16}em) {
      ${css(...args)};
    }
  `;
  // Makes a rule for using max-width, in cases where it's needed
  styles[`${size}Only`] = (...args) => css`
    @media (max-width: ${(breakpoints[size] - 1) / 16}em) {
      ${css(...args)};
    }
  `;
  return styles;
}, {});
