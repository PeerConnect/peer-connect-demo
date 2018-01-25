import './styles/app.less';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute, Redirect } from 'react-router';

// Container
import Container from './components/Container.jsx';

// Application Routes
import Layout from './components/Layout.jsx';
import Demo from './components/Demo/Demo.jsx';
import NotFound from './components/NotFound/NotFound.jsx';

class Handler extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Container}>
          <IndexRoute component={Layout} />
          <Route path="/demo" component={Demo} />
        </Route>
        <Route path="*" onEnter={() => browserHistory.push('/')} />
      </Router>
    );
  }
}

ReactDOM.render(<Handler />, document.getElementById('root'));
