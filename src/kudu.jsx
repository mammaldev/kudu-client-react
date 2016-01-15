import React from 'react';

export default class Kudu extends React.Component {

  static childContextTypes = {
    app: React.PropTypes.object.isRequired,
  };

  constructor() {
    super();
  }

  componentWillMount() {
    this.app = this.props.app;
  }

  getChildContext() {

    return {
      app: this.app,
    };
  }

  render() {
    return this.props.children;
  }
}
