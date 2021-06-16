import React from "react";
// Components UI
import { UiServices } from "../services";

export default function AboutPage() {
    return (
        <>
            <UiServices.Public.Header />
            <UiServices.Public.Container>
                <h1>ABOUT</h1>
            </UiServices.Public.Container>
        </>
    );
}