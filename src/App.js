import { Switch, Route, Redirect } from 'react-router-dom';
import { adminRoutes } from './routes';
import Frame from './components/Frame/Frame';
import React from 'react';

function App() {
  return (
    <Frame >
      <Switch>
        {adminRoutes.map(route => {
          return <Route key={route.path} path={route.path} exact={route.exact} render={routeProps => {
            return <route.component {...routeProps} />
          }}></Route>
        })}
        <Redirect to='/404' />
      </Switch>
    </Frame>

  );
}

export default App;
