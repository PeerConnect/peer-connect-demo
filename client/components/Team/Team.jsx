import React from 'react';
import { render } from 'react-dom';
import mike from '../../images/mike.jpg'
import justin from '../../images/justin.jpg'
import jim from '../../images/jim.jpg'
import peter from '../../images/peter.jpg'

const Team = () =>
  (
    <div id="team">
      <a name="team"></a>
      <h2 className="fw-600 margin-top margin-bottom-m raleway text-center">Meet the Team</h2>
      <div id="members">
        <div className="member">
          <div className="img-container margin-bottom">
            <img className="head-shot" style={{ top: '-20px' }} data-src={mike} />
          </div>
          <div className="member-info">
            <h4 className="margin-0 fw-600">Mike Gutierrez</h4>
            <h6 className="margin-0">Software Engineer</h6>
          </div>
        </div>
        <div className="member">
          <div className="img-container margin-bottom">
            <img className="head-shot" style={{ top: '-20px' }} data-src={jim} />
          </div>
          <div className="member-info">
            <h4 className="margin-0 fw-600">Jim Kang</h4>
            <h6 className="margin-0">Software Engineer</h6>
          </div>
        </div>
        <div className="member">
          <div className="img-container margin-bottom">
            <img className="head-shot" style={{ top: '-50px' }} data-src={justin} />
          </div>
          <div className="member-info">
            <h4 className="margin-0 fw-600">Justin Ko</h4>
            <h6 className="margin-0">Software Engineer</h6>
          </div>
        </div>
        <div className="member">
          <div className="img-container margin-bottom">
            <img className="head-shot" style={{ top: '-50px' }} data-src={peter} />
          </div>
          <div className="member-info">
            <h4 className="margin-0 fw-600">Peter Lee</h4>
            <h6 className="margin-0">Software Engineer</h6>
          </div>
        </div>
      </div>
    </div>
  );


export default Team;
