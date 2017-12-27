import styled from 'styled-components';
import { media } from 'style/sizes';

const BrSm = styled.br`
  ${media.small`
    display: none;
  `};
`;

export default BrSm;
