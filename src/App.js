import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Card from "./components/Card";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:id" children={<Card/>}/>
      </Switch>
    </Router>
  );
}

export default App;
