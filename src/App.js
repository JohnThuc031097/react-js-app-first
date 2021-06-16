import React from "react";
// React Route DOM
import { BrowserRouter, Switch } from "react-router-dom";
// Services
import { ProviderServices, DomainServices, RouteServices } from "./services";

function App() {
    return (
        <ProviderServices.AuthProvider>
            <BrowserRouter>
                <Switch>
                    <DomainServices.Route.RouteLoad routes={RouteServices.Routes} />
                </Switch>
            </BrowserRouter>
        </ProviderServices.AuthProvider>
    );
}

export default App;
