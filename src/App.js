import 'antd/dist/antd.css';

//Routes 
import routes from './routes';

import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, i) => (
          <Route
              key={i}
              path={route.path}
              component={route.component}
            exact
            />
        ))}
      </Switch>
  </BrowserRouter>
  );
}

export default App;
