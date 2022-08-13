import 'antd/dist/antd.css';
//Routes 
import routes from './routes';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {

  console.log(routes)

  return (
    <Router>
      <Routes>
        {routes.map((route, i) => (
          <Route
            key={i}
            path={route.path}
            element={route.component}
            exact
          />
        ))}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={
          <>
            <h1>Ops! Não encontramos nada!</h1>
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
