import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
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
            </Router>
        </div>
    );
}

export default App;
