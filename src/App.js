import React from "react";
// React Route DOM
import { BrowserRouter, Switch } from "react-router-dom";
// Routes
import Routes from "./routers";
// Utils
import { RouteLoad } from "./utils/route";
// Providers
import { AuthProvider } from "./providers";

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Switch>
                    <RouteLoad routes={Routes} />
                </Switch>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
