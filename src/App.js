import { Route, Switch } from "react-router-dom";
import "./App.css";
import Movies from "./components/movies";
import NavBar from "./components/navBar";
import Features from "./components/features";
import Pricing from "./components/pricing";

function App() {
  return (
    <div>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/Features" component={Features} />
          <Route path="/Pricing" render={props => <Pricing addProps=" List" {...props} />} />
          <Route path="/" exact component={Movies} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
