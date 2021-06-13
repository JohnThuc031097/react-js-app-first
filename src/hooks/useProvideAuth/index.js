import { useState } from "react";
// Functions
import SignIn from "./signin";
import SignOut from "./signout";

export default function useProvideAuth() {
    const [isAuthenticed, setAuthenticed] = useState(false);
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);

    const signIn = SignIn()
        .then(user => {
            setAuthenticed(true);
            setUser(user);
        })
        .catch(error => {
            setError(error);
        });

    const signOut = SignOut()
        .then(() => {
            setAuthenticed(false);
            setUser(null);
        })
        .catch(error => {
            setError(error);
        });

    return {
        isAuthenticed,
        error,
        user,
        signIn,
        signOut
    }
}