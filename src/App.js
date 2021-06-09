import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomeView from "./home";
import AboutView from "./about";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/">
                    <HomeView />
                </Route>
                <Route path="/about">
                    <AboutView />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
