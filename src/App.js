import { Route, Switch, Redirect } from "react-router-dom";
import Movies from "./components/movies";
import NavBar from "./components/navBar";
import Customers from "./components/customers";
import Rental from "./components/rental";
import NotFound from "./components/notFound";
import MovieForm from "./components/movieForm";
import "./App.css";
import React from "react";
import LoginForm from "./components/loginFom";
import RegisterForm from "./components/registerForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/movies/:id" render={props => <MovieForm {...props} />} />
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rental" component={Rental} />
          <Route path="/not-Found" component={NotFound} />
          <Redirect exact from="/" to="/movies" />
          <Redirect to="/not-Found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
