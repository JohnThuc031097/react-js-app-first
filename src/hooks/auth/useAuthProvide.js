import { useState } from "react";
// Functions
import { SignIn, SignOut } from "./components";

export default function useAuthProvide() {
    const [isAuthenticated, setAuthenticated] = useState(false);
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);

    const signIn = async (callback) => {
        return SignIn()
            .then(user => {
                setAuthenticated(true);
                setUser(user);
            })
            .catch(error => {
                setError(error);
            })
            .finally(callback);
    }

    const signOut = (callback) => {
        return SignOut()
            .then(() => {
                setAuthenticated(false);
                setUser(null);
            })
            .catch(error => {
                setError(error);
            })
            .finally(callback);
    }

    return {
        isAuthenticated,
        error,
        user,
        signIn,
        signOut
    }
}