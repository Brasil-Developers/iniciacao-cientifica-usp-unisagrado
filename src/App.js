/* eslint-disable */

import 'antd/dist/antd.css';

//Routes 
import routes from './routes';

import Login from 'Screens/login';

import {
  BrowserRouter,
  Routes,
  Route,
  // useLocation,
} from "react-router-dom";

function App() {
  
  // setTimeout((useLocation) => {
  //   const url = useLocation();
  //   console.log(url);
  // },3000);

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
        <Route path="*" element={
          <>
            <h1>Ops! Não encontramos nada!</h1>
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
