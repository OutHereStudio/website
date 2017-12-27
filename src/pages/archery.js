import React from 'react';
import links from 'lib/links';
import Page from 'components/Page';

export default class Archery extends React.Component {
  componentDidMount() {
    window.location = links.archeryAppStore;
  }

  render() {
    return (
      <Page>
        <h1>Sending you to the App Store...</h1>
      </Page>
    );
  }
}
