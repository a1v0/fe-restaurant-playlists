import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import UserPlaylists from "./UserPlaylists";
import CreatePlaylist from "./CreatePlaylist";

function Profile() {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [rerender, setRerender] = useState(0); // every time we need to rerender, we'll modify this

    if (isLoading) {
        return <div>Loading ...</div>;
    }
    if (user !== undefined && isAuthenticated) {
        return (
            <main className="Profile">
                <h1>Account Details</h1>
                <div className="profile-details">
                    <img src={user.picture} alt={user.name} />
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </div>
                <UserPlaylists rerender={rerender} />
                <CreatePlaylist rerender={rerender} setRerender={setRerender} />
            </main>
        );
    }
    return <div>not logged in</div>;
}

export default Profile;
