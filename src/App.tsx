import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./Components/About/About";
import Freelance from "./Components/Freelance/Freelance";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/login"
            render={() => {
              return <Login />;
            }}
          />
          <Route
            exact
            path="/freelance"
            render={() => {
              return <Freelance />;
            }}
          />
          <Route
            exact
            path="/about"
            render={() => {
              return <About />;
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
