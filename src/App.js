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
import AdminProfile from "./pages/admin-profile/AdminProfile";
import { Link } from "react-router-dom";
import ResetPassword from "./pages/reset-password/ResetPassword";
import AddProductForm from "./components/add-product/AddProductForm";
import AddProduct from "./pages/products/AddProduct";
import EditProduct from "./pages/products/EditProduct";
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

          <PrivateRoute path="/orders">
            <Orders />
          </PrivateRoute>
          <PrivateRoute path="/payments">
            <Payments />
          </PrivateRoute>
          <PrivateRoute path="/customers">
            <Customers />
          </PrivateRoute>
          <PrivateRoute path="/admin-profile">
            <AdminProfile />
          </PrivateRoute>
          <PrivateRoute path="/categories">
            <Categories />
          </PrivateRoute>
          <PrivateRoute exact path="/products">
            <Products />
          </PrivateRoute>
          <PrivateRoute exact path="/products/new">
            <AddProduct />
          </PrivateRoute>
          <PrivateRoute exact path="/products/:slug">
            <EditProduct />
          </PrivateRoute>
          <PrivateRoute path="/admin-profile">
            <AdminProfile />
          </PrivateRoute>
          <Route path="/email-verification">
            <EmailVerification />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/reset-password">
            <ResetPassword />
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
