import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";

const ClassicsPage = () => (
  <div>
    <h1>Classics PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/classics" component={ClassicsPage} />
      </Switch>
    </div>
  );
}

export default App;
