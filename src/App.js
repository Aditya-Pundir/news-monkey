import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import News from "./components/News";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <News key="home" category="general" />
          </Route>
          <Route exact path="/business">
            <News key="business" category="business" />
          </Route>
          <Route exact path="/entertainment">
            <News key="entertainment" category="entertainment" />
          </Route>
          <Route exact path="/health">
            <News key="health" category="health" />
          </Route>
          <Route exact path="/sports">
            <News key="sports" category="sports" />
          </Route>
          <Route exact path="/science">
            <News key="science" category="science" />
          </Route>
          <Route exact path="/technology">
            <News key="technology" category="technology" />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
