import React from "react";
import Spotify from "./spotify";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from "react-router-dom";

export default function App() {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/loggedin">Logged In</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/loggedIn" component={Spotify}>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

function Home() {
  return (
      <div>
        <div id="enDiv">
          <h2><a href="http://localhost:8888/spotify/login">Login to Spotify</a> </h2>
        </div>
      </div>
  );
}