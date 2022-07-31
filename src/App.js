import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Movies from "./components/movies";
import NavBar from "./components/navBar";
import Customers from "./components/customers";
import Rental from "./components/rental";
import NotFound from "./components/notFound";

function App() {
  return (
    <div>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/Customers" component={Customers} />
          <Route path="/Rental" component={Rental} />
          <Route path="/not-Found" component={NotFound} />
          <Route path="/Movies" exact component={Movies} />
          <Redirect to="/not-Found" />
          <Redirect from="/" to="/Movies" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
