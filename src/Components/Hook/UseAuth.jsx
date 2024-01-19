import { useContext } from "react";
import { AuthProvider } from "../AuthContributor/AuthContributor";



const UseAuth = () => {
    const auth = useContext(AuthProvider)
    return auth
};

export default UseAuth;