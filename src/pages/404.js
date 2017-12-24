import React from 'react';

export default class NotFoundPage extends React.Component {
  componentDidMount() {
    window.location = '/';
  }
  render() {
    return null;
  }
}
