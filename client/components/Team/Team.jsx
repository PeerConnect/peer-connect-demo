import React from 'react';
import { render } from 'react-dom';
import doge from '../../images/doge.jpg'
import raccoon from '../../images/raccoon.jpg'
import kitten from '../../images/kitten.jpg'
import honeyBadger from '../../images/honey_badger.jpg'

const Team = () =>
  (
    <div id="team">
      <a name="team"></a>
      <h2>Meet the Members!</h2>
      <div id="members">
        <div className="member">
          <h4>Mike Gutierrez</h4>
          <h6>Software Engineer</h6>
          <img className="head-shot" data-src={honeyBadger} />
          <p className="member-info">
            *Place description here*
          </p>
        </div>
        <div className="member">
          <h4>Jim Kang</h4>
          <h6>Software Engineer</h6>
          <img className="head-shot" data-src={doge} />
          <p className="member-info">
            *Place description here*
          </p>
        </div>
        <div className="member">
          <h4>Justin Ko</h4>
          <h6>Software Engineer</h6>
          <img className="head-shot" data-src={kitten} />
          <p className="member-info">
            *Place description here*
          </p>
        </div>
        <div className="member">
          <h4>Peter Lee</h4>
          <h6>Software Engineer</h6>
          <img className="head-shot" data-src={raccoon} />
          <p className="member-info">
            *Place description here*
          </p>
        </div>
      </div>
    </div>
  );


export default Team;
