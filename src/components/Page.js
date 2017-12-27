import styled from 'styled-components';
import colors from 'style/colors';

const Page = styled.main`
  min-height: 75vh;
  background-color: ${colors.navy};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    text-align: center;
  }
`;

export default Page;
