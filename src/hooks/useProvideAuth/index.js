import { useState } from "react";
// Functions
import { AuthSignIn, AuthSignOut } from "../../components/core/auth";

export default function useProvideAuth() {
    const [isAuthenticated, setAuthenticated] = useState(false);
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);

    const signIn = async (callback) => {
        return AuthSignIn()
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
        return AuthSignOut()
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