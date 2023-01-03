import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function LogoAndUser() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <div className="LogoAndUser">
      <div className="logo">
        <Link to="/">
          <img alt="logo" src="" />
          <div className="company-name">
            Company Name Here
            {/* (if header is too cluttered, we can hide
                    this with media queries) */}
          </div>
        </Link>
      </div>
      <div className="user-details">
        <div className="profile-pic">
        {user !== undefined ? <img alt="avatar" src={user.picture}></img> : null}
        </div>
        {user !== undefined ? <div>{user.name}</div> : <p>Login</p>}
      </div>
    </div>
  );
}
