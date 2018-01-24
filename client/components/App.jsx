import React from 'react';
import { render } from 'react-dom';

import Menu from './Menu/Menu.jsx'
import GetStarted from './GetStarted/GetStarted.jsx'
import Features from './Features/Features.jsx'
import Team from './Team/Team.jsx'

const App = () =>
  (
    <div id="app-container">
      <Menu />
      <Features />
      <GetStarted />
      <Team />
    </div>
  );


export default App;
