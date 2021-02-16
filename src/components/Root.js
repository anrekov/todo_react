import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
import TodoList from './TodoList';
import Register from './Register';
import ProtectedRoute from '../HOC/ProtectedRoute';
import UserInfo from './UserInfo'

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <ProtectedRoute exact path="/user" component={UserInfo} />
        <ProtectedRoute exact path="/" component={TodoList} />
      </Switch>
    </Router>
  );
};

export default Root;