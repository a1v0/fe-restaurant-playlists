import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

export default function Home() {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();

  return (
    <div>
      <button onClick={() => loginWithRedirect()}>Log In</button>
      <button onClick={() => logout({ returnTo: window.location.origin })}>
        Log Out
      </button>
      <Link to="/profile">Yo</Link>
    </div>
  );
}
