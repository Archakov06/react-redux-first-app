import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/index'

import App from './containers/App'
import Home from './containers/Home'
import Login from './containers/Login'
import NotFound from './containers/NotFound'

import LoginLayout from './components/Layouts/LoginLayout'
import RegistrationLayout from './components/Layouts/RegistrationLayout'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

const store = configureStore()

store.subscribe(() => {
  console.log(store.getState());
});

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='auth' component={Login}>
          <Route path='login' component={LoginLayout} />
          <Route path='registration' component={RegistrationLayout} />
        </Route>
        <Route path='*' component={NotFound} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById("root")
);
