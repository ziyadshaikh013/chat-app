import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";

const App = (props) => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Join}></Route>
          <Route path="/chat" component={Chat}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
