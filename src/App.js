/* eslint-disable */

import 'antd/dist/antd.css';

//Routes 
import routes from './routes';

import Login from 'Screens/login';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const token = sessionStorage.getItem('token');
  if(!token) {
    return <Login />
  }

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, i) => (
          <Route
              key={i}
              path={route.path}
              element={route.component}
              exact
            />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
