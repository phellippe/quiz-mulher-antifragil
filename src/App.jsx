import {useState} from "react";
import "./app.scss"
import HomePage from "./components/home/HomePage";
import Questions from "./components/home/questions/Questions";
import Fragil from "./components/home/fragil/Fragil";
import Antifragil from "./components/home/antifragil/Antifragil";
import Resistente from "./components/home/resistente/Resistente";

import 'bulma/css/bulma.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [activeQuestion, setActiveQuestion] = useState(0);

  return (
    <Router>
      <div className="app">
      <Switch>
        <Route path="/" exact>
          <HomePage/>
        </Route>
        <Route path="/questoes" exact>
          <Questions/>
        </Route>
        <Route path="/fragil" exact>
          <Fragil/>
        </Route>
        <Route path="/antifragil" exact>
          <Antifragil/>
        </Route>
        <Route path="/resistente" exact>
          <Resistente/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;