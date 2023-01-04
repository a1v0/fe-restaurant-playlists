import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import UserPlaylists from "./UserPlaylists";

function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (user !== undefined && isAuthenticated) {
    return (
      <main>
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
      <UserPlaylists />
      </main>
    );
  }
  return <div>not logged in</div>;
}

export default Profile;
