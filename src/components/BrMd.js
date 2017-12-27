import styled from 'styled-components';
import { media } from 'style/sizes';

const BrMd = styled.br`
  display: none;
  ${media.small`
    display: inherit;
  `};
`;

export default BrMd;
