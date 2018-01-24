import React, { Component } from 'react';
import { render } from 'react-dom';

// Assets
import linkedIn from '../../images/linkedIn.png'
import gitHub from '../../images/gitHub.png'

class Member extends Component {
  renderLinkedIn() {
    return (
      <a href={this.props.linkedin} target="_blank">
        <img src={linkedIn} className="icon-linkedIn" />
      </a>
    );
  }

  renderGitHub() {
    return (
      <a href={this.props.github} target="_blank">
        <img src={gitHub} className="icon-gitHub" />
      </a>
    );
  }

  render() {
    return (
      <div className="member">
        <div className="img-container margin-bottom">
          <img className="head-shot" style={this.props.imgStyle} src={this.props.imgSrc} />
        </div>
        <div className="member-info">
          <h4 className="margin-0 fw-600">{this.props.name}</h4>
          <h6 className="margin-0">{this.props.title}</h6>
          <span className="margin-top-m">
            {this.renderGitHub()} {this.renderLinkedIn()}
          </span>
        </div>
      </div>
    );
  }
}

export default Member;
