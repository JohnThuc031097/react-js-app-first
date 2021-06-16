import React from "react";
// Components UI
import { UiServices } from "../services";

export default function HomePage() {

    return (
        <>
            <UiServices.Public.Header />
            <UiServices.Public.Container>
                <h1>HOME</h1>
            </UiServices.Public.Container>
        </>
    );
}