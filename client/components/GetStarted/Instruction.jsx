import React, { Component } from 'react';
import { render } from 'react-dom';

import check from '../../images/check.png'

class Instruction extends Component {
  render() {
    return (
      <div className="instruction-bullet">
        <div className="instruction-icon-container">
          <img className="instruction-icon margin-right" src={check} />
          <div className="h6 fw-400">{this.props.title}</div>
        </div>
        <ul className="instruction-list">
          {
            this.props.direction &&
            <li className="direction small">{this.props.direction}</li>
          }
          {
            this.props.snippet1 &&
            <li className="code-block">{this.props.snippet1}</li>
          }
          {
            this.props.snippet2 &&
            <li className="code-block">{this.props.snippet2}</li>
          }
          {
            this.props.snippet3 &&
            <li className="code-block">{this.props.snippet3}</li>
          }
        </ul>
      </div>
    )
  }
}

export default Instruction;
