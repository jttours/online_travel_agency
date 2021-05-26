import {
    Route,
    BrowserRouter as Router,
    Switch,
    Redirect,
  } from "react-router-dom";
  import 'semantic-ui-css/semantic.min.css';
  import LoginForm from "./LoginForm";
  import RegisterForm from "./RegisterForm";
  import Vacations from "./Vacations";
  import UserNotFound from "./UserNotFound";
  import AdminMain from './AdminAddVacation';


function Routes(props) {
    return (
        <Router {...props}>
    <Switch>
      <Route path="/login">
        <LoginForm />
      </Route>
      <Route path="/register">
        <RegisterForm />
      </Route>
      <Route path="/admin">
        <AdminMain />
      </Route>
      <Route path="/vacations">
        <Vacations />
      </Route>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="*">
        <UserNotFound />
      </Route>
    </Switch>
  </Router>
    )
}

export default Routes
