import { Route, Switch, Redirect } from "react-router-dom";
import Movies from "./components/movies";
import NavBar from "./components/navBar";
import Customers from "./components/customers";
import Rental from "./components/rental";
import NotFound from "./components/notFound";
import MovieDetails from "./components/movieDetails";
import "./App.css";
import React from "react";
import LoginForm from "./components/loginFom";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/movie/:_id" component={MovieDetails} />
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
