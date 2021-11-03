import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import News from "./components/News";
import NavBar from "./components/NavBar";
import "./style/App.css";

function App() {
  const [country, setCountry] = useState(
    localStorage.getItem("country") || "us"
  );
  localStorage.setItem("country", country);
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <div className="countryContainer">
              <label htmlFor="country">
                <h5 id="countryLabel">Country:</h5>
              </label>
              <select
                id="country"
                onChange={(e) => setCountry(e.target.value)}
                value={country}
              >
                <option value="au">Australia</option>
                <option value="ca">Canada</option>
                <option value="gb">United Kingdom</option>
                <option value="in">India</option>
                <option value="ph">Philippines</option>
                <option value="pk">Pakistan</option>
                <option value="sg">Singapore</option>
                <option value="us">United States</option>
              </select>
            </div>
            <News key="home" country={country} category="general" />
          </Route>
          <Route exact path="/business">
            <News key="business" country={country} category="business" />
          </Route>
          <Route exact path="/entertainment">
            <News
              key="entertainment"
              country={country}
              category="entertainment"
            />
          </Route>
          <Route exact path="/health">
            <News key="health" country={country} category="health" />
          </Route>
          <Route exact path="/sports">
            <News key="sports" country={country} category="sports" />
          </Route>
          <Route exact path="/science">
            <News key="science" country={country} category="science" />
          </Route>
          <Route exact path="/technology">
            <News key="technology" country={country} category="technology" />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
