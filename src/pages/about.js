import React from "react";
// Components UI
import { ComponentServices } from "../services";

export default function AboutPage() {
    return (
        <>
            <ComponentServices.Public.Header />
            <ComponentServices.Public.Container>
                <h1>ABOUT</h1>
            </ComponentServices.Public.Container>
        </>
    );
}