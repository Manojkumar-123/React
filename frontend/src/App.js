import "./App.css";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import User from "./user/pages/user";
import NewPlace from "./places/pages/newPlace";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={User} exact/>
        <Route path="/places/new" component={NewPlace} exact/>
        <Redirect path="/" />
      </Switch>
    </Router>
  );
};

export default App;
