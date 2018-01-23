import React from 'react';
import { render } from 'react-dom';

import Title from './Title/Title.jsx'
import GetStarted from './GetStarted/GetStarted.jsx'
import Features from './Features/Features.jsx'
import Team from './Team/Team.jsx'

const App = () =>
  (
    <div id="app-container">
      <Title />
      <Features />
      <GetStarted />
      <Team />
    </div>
  );


export default App;
