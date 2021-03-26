import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import FoodDetail from "./components/FoodDetial";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Router>
        <div class="nav-container">
          <Link to="/">
            <img className="logo" src={logo} alt="logo"></img>
          </Link>

          <div className="nav-bar">
            <ul>
              <li className="home-btn">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/foodDetial">Food</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="menu-section">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/foodDetial" component={FoodDetail}></Route>
            <Route></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
