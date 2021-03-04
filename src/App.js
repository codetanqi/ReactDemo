import { Button } from 'antd';
import 'antd/dist/antd.css'
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { adminRoutes } from './routes'
function App() {
  return (
    <div className="App">
      <h1>这是App组件</h1>
      <Switch>
        {adminRoutes.map(route => {
          return <Route key={route.path} path={route.path} exact={route.exact} render={routeProps => {
            return <route.component {...routeProps} />
          }}></Route>
        })}
        <Redirect to='/404' />
      </Switch>
    </div>
  );
}

export default App;
