import React from "react";
// Components UI
import { ComponentServices } from "../services";

export default function HomePage() {

    return (
        <>
            <ComponentServices.Public.Header />
            <ComponentServices.Public.Container>
                <h1>HOME</h1>
            </ComponentServices.Public.Container>
        </>
    );
}