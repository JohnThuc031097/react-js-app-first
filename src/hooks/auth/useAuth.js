
import { useContext } from "react";
// Contexts
import { ContextServices } from "../../services";

export default function useAuth() {
    return useContext(ContextServices.AuthContext);
}