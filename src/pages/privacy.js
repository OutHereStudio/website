import React from 'react';
import styled from 'styled-components';
import colors from 'style/colors';
import Head from 'react-helmet';

export const pageQuery = graphql`
  query PrivacyQuery {
    markdownRemark(frontmatter: { title: { eq: "Privacy policy" } }) {
      html
    }
  }
`;

const PrivacyContainer = styled.main`
  padding: 1% 2.5%;
  background-color: ${colors.navy};
  color: white;
  h1 {
    margin-top: 20px;
    text-align: center;
  }
  .content {
    max-width: 800px;
    margin: 0 auto;
  }
`;

const PrivacyPage = props => (
  <PrivacyContainer>
    <Head>
      <title>Privacy Policy</title>
    </Head>
    <div
      className="content"
      dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
    />
  </PrivacyContainer>
);

export default PrivacyPage;
