import {
  Switch,
  Route, HashRouter,
} from "react-router-dom";
import Selector from "./components/Selector";
import Widget from "./components/Widget";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/widget/:logos">
          <Widget/>
        </Route>
        <Route path="/">
          <Selector/>
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
