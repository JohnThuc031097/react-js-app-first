import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
// Routes
import Routes from "./routers";
// Utils
import { RouteLoad } from "./utils/route";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <RouteLoad routes={Routes} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
