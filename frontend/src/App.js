import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import User from "./user/pages/user";
import NewPlace from "./places/pages/newPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
      <Switch>
        <Route path="/" component={User} exact />
        <Route path="/places/new" component={NewPlace} exact />
        <Redirect path="/" />
      </Switch>
      </main>
    </Router>
  );
};

export default App;
