import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../src/pages/login/Login";
import PageNotFound from "../src/components/page-not-found/PageNotFound.js";
import AdminRegistration from "../src/pages/admin-registration/AdminRegistration";
import EmailVerification from "../src/pages/email-verification/EmailVerification";
import Dashboard from "../src/pages/dashboard/Dashboard";
import Orders from "./pages/orders/Orders";
import Payments from "./pages/payments/Payments";
import Customers from "./pages/customers/Customers";
import Products from "./pages/products/Products";
import Categories from "./pages/categories/Categories";
import PrivateRoute from "./components/private-route/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/registration">
            <AdminRegistration />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>

          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/payments">
            <Payments />
          </Route>
          <Route path="/customers">
            <Customers />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/email-verification">
            <EmailVerification />
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
