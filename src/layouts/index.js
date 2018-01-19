import React from 'react';
import PropTypes from 'prop-types';
import Head from 'react-helmet';
import Footer from 'components/Footer';

import 'style/gatsby.css';

const TemplateWrapper = ({ children, data }) => {
  const {
    title,
    keywords,
    description,
    author,
    copyright
  } = data.site.siteMetadata;
  return (
    <div>
      <Head titleTemplate={`%s | ${title}`} defaultTitle={title}>
        <meta name="keywords" content={keywords.join(',')} />
        <meta name="description" content={description} />
        <meta name="author" content={author} />
        <meta name="copyright" content={copyright} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/manifest.json" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#142b78"
        />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <meta
          name="msapplication-config"
          content="/favicons/browserconfig.xml"
        />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      {children()}
      <Footer />
    </div>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

export const pageQuery = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        keywords
        description
        author
        copyright
      }
    }
  }
`;
