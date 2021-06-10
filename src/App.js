import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
// Utils
import { RouteInit } from "./utils/route";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <RouteInit />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
