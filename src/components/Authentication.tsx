import { useEffect } from "react";
import LoginButton from "./Login";
import LogoutButton from "./Logout";
import { useAuth0 } from "@auth0/auth0-react";
import { postUser } from "../app-api";

const AuthenticationButton = () => {
    const { user, isAuthenticated } = useAuth0();

    useEffect(() => {
        if (isAuthenticated) {
            postUser(user?.email!, user?.name!, user?.picture!);
        }
    }, [isAuthenticated]);

    return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default AuthenticationButton;
