import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import User from "./user/pages/user";
import NewPlace from "./places/pages/newPlace";
import UserPlaces from "./places/pages/userPlaces";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" component={User} exact />
          <Route path="/:userId/places" component={UserPlaces} exact />
          <Route path="/places/new" component={NewPlace} exact />
          <Redirect path="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
