import React, { Component } from 'react';
import { render } from 'react-dom';

// Components
import Member from './Member.jsx';

// Profile Images
import profileMike from '../../images/mike.jpg'
import profileJustin from '../../images/justin.jpg'
import profileJim from '../../images/jim.jpg'
import profilePeter from '../../images/peter.jpg'

const members = [
  {
    name: 'Mike Gutierrez',
    title: 'Software Engineer',
    imgSrc: profileMike,
    imgStyle: { top: '-20px' },
    githubURL: 'https://github.com/mikegutierrez',
    linkedInURL: 'https://www.linkedin.com/in/mikegutierrez/'
  },
  {
    name: 'Jim Kang',
    title: 'Software Engineer',
    imgSrc: profileJim,
    imgStyle: { top: '-20px' },
    githubURL: 'https://github.com/jiminykbob',
    linkedInURL: 'https://www.linkedin.com/in/ji-min-kang/'
  },
  {
    name: 'Justin Ko',
    title: 'Software Engineer',
    imgSrc: profileJustin,
    imgStyle: { top: '-50px' },
    githubURL: 'https://github.com/justinko43',
    linkedInURL: 'https://www.linkedin.com/in/justin-ko-9b255893/'
  },
  {
    name: 'Peter Lee',
    title: 'Software Engineer',
    imgSrc: profilePeter,
    imgStyle: { top: '-50px' },
    githubURL: 'https://github.com/wasafune',
    linkedInURL: 'https://www.linkedin.com/in/peterhbyullee/'
  }
];


class Team extends Component {
  renderTeam() {
    return members.map((member, i) => {
      return (
        <Member
          key={`member-${i}`}
          imgStyle={member.imgStyle}
          imgSrc={member.imgSrc}
          name={member.name}
          title={member.title}
          github={member.githubURL}
          linkedin={member.linkedInURL}
        />
      )
    });
  }

  render() {
    return (
      <div id="team">
        <a name="team"></a>
        <h2 className="fw-600 margin-top margin-bottom-m raleway text-center">Meet the Team</h2>
        <div id="members">
          {this.renderTeam()}
        </div>
      </div>
    );
  }
}

export default Team;
