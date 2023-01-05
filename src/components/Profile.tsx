import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import UserPlaylists from "./UserPlaylists";
import CreatePlaylist from "./CreatePlaylist";

function Profile() {
    const { user, isAuthenticated, isLoading } = useAuth0();
    if (isLoading) {
        return <div>Loading ...</div>;
    }
    console.log(user);
    if (user !== undefined && isAuthenticated) {
        return (
            <main className="Profile">
                <h1>Account Details</h1>
                <div className="profile-details">
                    <img src={user.picture} alt={user.name} />
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </div>
                <UserPlaylists />
                <CreatePlaylist />
            </main>
        );
    }
    return <div>not logged in</div>;
}

export default Profile;
