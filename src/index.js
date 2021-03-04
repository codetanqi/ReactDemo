import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import { mainRoutes } from './routes'
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        {mainRoutes.map(route => {
          console.log(route)
          return <Route key={route.path} {...route} />

        })}
        <Redirect to="/404 "></Redirect>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
