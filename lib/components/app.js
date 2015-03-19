import React from 'react';

export default class App extends React.Component {
  static get propTypes() {
    return {
      message: React.PropTypes.string.isRequired
    }
  }
  render() {
    return <div>{this.props.message}</div>;
  }
}
