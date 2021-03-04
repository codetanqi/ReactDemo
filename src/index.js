import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { adminRoutes, mainRoutes } from './routes'
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path='/admin' render={routeProps => <App {...routeProps} />}></Route>
        {mainRoutes.map(route => {
          return <Route key={route.path} {...route} />

        })}
        <Redirect to={adminRoutes[0].path} from='/admin'></Redirect>
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
