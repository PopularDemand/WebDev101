import React from 'react';
import { render } from 'react-dom';
import { Route, Router, browserHistory} from 'react-router';

import './index.css';

import App from './App';
import Course from './components/Course';
import HomePage from './components/HomePage';

const Root = () => (
  <Router history={browserHistory}>
    <div>
      <Route component={ App }>
        <Route exact path='/webdev101/' component={ HomePage } />
        <Route path='/webdev101/course/:id' />
        <Route path='/webdev101/course/:id/l/:lessonRoute' component={ Course }/>
      </Route>
    </div>
  </Router>
)

render(
  <Root />,
  document.getElementById('root')
);
