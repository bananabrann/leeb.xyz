import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Freelance from "./Components/Freelance/Freelance";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import "./App.scss";

function App() {
    return (
        <div className="App">
            <Router>
                <Route
                    exact
                    path="/"
                    render={() => {
                        return <Home />;
                    }}
                />

                <Route
                    exact
                    path="/login"
                    render={() => {
                        return <Login />
                    }}
                />

                <Route 
                    exact path="/freelance"
                    render={() => {
                        return <Freelance />
                    }}
                />
            </Router>
        </div>
    );
}

export default App;
