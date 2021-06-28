//import './bootstrap.min.css';
import Login from './components/Login'
//import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './components/Signup'
import { AuthProvider } from "./context/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from './components/Dashboard';
import PrivateRoute from "./components/PrivateRoute"


function App() {
  return (

    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/Signup" component={Signup} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/" component={Dashboard} />
        </Switch>
      </AuthProvider>
    </Router>




  );
}

export default App;
