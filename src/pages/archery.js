import React from 'react';
import links from 'lib/links';

export default class Archery extends React.Component {
  componentDidMount() {
    window.location = links.archeryAppStore;
  }

  render() {
    return null;
  }
}
