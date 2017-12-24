import React from 'react';
import PropTypes from 'prop-types';
import Head from 'react-helmet';
import Footer from 'components/Footer';

import './gatsby.css';

var redirect = sessionStorage.redirect;
delete sessionStorage.redirect;
if (redirect && redirect != location.href) {
  history.replaceState(null, null, redirect);
}

const keywords = [
  'software',
  'games',
  'mobile',
  'augmented reality',
  'mixed reality',
  'mobile games',
  'iOS',
  'out here archery',
  'out here'
].join(',');

const TemplateWrapper = ({ children }) => (
  <div>
    <Head>
      <title>Out Here Studio</title>
      <meta name="keywords" content={keywords} />
      <meta
        name="description"
        content="Creative software studio making digital experiences to bring people closer together with each other, their community, and the natural world."
      />
      <meta name="author" content="Louis DeScioli" />
      <meta name="copyright" content="Out Here Studio LLC" />
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
      <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    {children()}
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
