import React from 'react';
import { render } from 'react-dom';

import Menu from './Menu/Menu.jsx'
import Campaign from './Campaign/Campaign.jsx'
import GetStarted from './GetStarted/GetStarted.jsx'
import Features from './Features/Features.jsx'
import Team from './Team/Team.jsx'
import Footer from './Footer/Footer.jsx'

const App = () =>
  (
    <div id="app-container">
      <Menu />
      <Campaign />
      <Features />
      <GetStarted />
      <Team />
      <Footer />
    </div>
  );


export default App;
