import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import "./App.scss";

function App() {
    useEffect(() => {
        console.log("Nothing's here, I promise.")
    }, []);

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
            </Router>
        </div>
    );
}

export default App;
