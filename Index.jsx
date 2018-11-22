import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    };
    this.getValue = this.getValue.bind(this);
    this.addValue = this.addValue.bind(this);
  }
  getValue(e) {
    this.setState({
      value: e.target.value
    });
  }
  addValue() {
    this.setState({
      value: ""
    });
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.getValue} />
        <button onClick={this.addValue}>新增</button>
      </div>
    )
  }
}

export default Index;