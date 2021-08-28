import {
  Switch,
  Route, HashRouter,
} from "react-router-dom";
import Selector from "./components/Selector";
import Markdown from "./components/Markdown";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/widget/:icons">
          <Markdown/>
        </Route>
        <Route path="/">
          <Selector/>
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
