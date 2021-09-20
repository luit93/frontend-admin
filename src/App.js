import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "../src/pages/login/Login";
import PageNotFound from "../src/components/page-not-found/PageNotFound.js";
import AdminRegistration from "../src/pages/admin-registration/AdminRegistration";
import { Button } from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/registration">
            <AdminRegistration />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
