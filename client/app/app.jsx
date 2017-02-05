import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        { this.props.childern }
      </div>
    );
  }
}

export default connect()(App);