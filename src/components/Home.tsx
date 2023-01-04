import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import AuthenticationButton from "./Authentication";

export default function Home() {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();

  return (
    <div>
      {/* <img src="https://images.pexels.com/photos/6150432/pexels-photo-6150432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img> */}
      <div className="navbar-nav ml-auto">
        <p>Log In here to create your own</p>
        <AuthenticationButton />
      </div>
      {/* <Link to="/profile"> User Profile </Link> */}
    </div>
  );
}
