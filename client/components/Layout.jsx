import React from 'react';
import { render } from 'react-dom';

// Application Components 
import Menu from './Menu/Menu.jsx'
import GetStarted from './GetStarted/GetStarted.jsx'
import Features from './Features/Features.jsx'
import Team from './Team/Team.jsx'
import Footer from './Footer/Footer.jsx'

const Layout = () =>
  (
    <main>
      <Features />
      <GetStarted />
      <Team />
    </main>
  );


export default Layout;
