import {
  fadeIn as fadeInAnim,
  fadeUpIn as fadeUpInAnim
} from 'style/animations';
import { css } from 'styled-components';

export const fadeUpIn = css`
  opacity: 0;
  animation: ${fadeUpInAnim} 1.2s forwards;
`;

export const fadeIn = css`
  opacity: 0;
  animation: ${fadeInAnim} 1.2s forwards;
`;

export const stretchFull = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
