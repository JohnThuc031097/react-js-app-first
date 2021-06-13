
import { useContext } from "react";
// Contexts
import { authContext } from "../../contexts";

export default function useAtuh() {
    return useContext(authContext);
}