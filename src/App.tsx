import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Freelance from "./Components/Freelance/Freelance";
import Home from "./Components/Home/Home";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/freelance"
            render={() => {
              return <Freelance />;
            }}
          />
          <Route
            exact
            path="/"
            render={() => {
              return <Home />;
            }}
          />

          {/* TODO -- 404 Page */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
