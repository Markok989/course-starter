
import React from 'react';
import { Route, Switch } from 'react-router';
import App from '../App';
import LessonPage from '../components/LessonPage/LessonPage';

const routes = (
  <div>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/lesson" component={LessonPage} />
      <Route path="/lesson/:id" component={LessonPage} />
    </Switch>
  </div>
)

export default routes;