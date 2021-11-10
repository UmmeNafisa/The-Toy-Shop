import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login'
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import UserDashboard from './Pages/UserDashboard/UserDashboard/UserDashboard';
import AdminDashboard from './Pages/AdminDashboard/AdminDashboard/AdminDashboard';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/userDashboard">
              <UserDashboard />
            </Route>
            <Route path="/adminDashboard">
              <AdminDashboard />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router >
      </AuthProvider>
    </div >
  );
}

export default App;
