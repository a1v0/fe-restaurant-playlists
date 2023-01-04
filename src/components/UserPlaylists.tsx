import { useEffect, useState } from "react";
import { getPlaylistByUser } from "../app-api";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { getCuisineImg } from "../utils";
function UserPlaylists() {
    const [userPlaylists, setUserPlaylists] = useState([]);
    const { user, isAuthenticated } = useAuth0();

    useEffect(() => {
        if (isAuthenticated) {
        getPlaylistByUser(user?.email!).then((response)=>{            
            setUserPlaylists((currPlaylists)=>{
                return response
            })
        })
        }
    }, [isAuthenticated]);
    return (
        <div className="Playlists">
        <h1>Restaurant Playlists</h1>
        <ul>
            {userPlaylists.map(
                (playlist: {
                    playlist_id: number;
                    name: string;
                    location: string;
                    cuisine: string;
                    vote_count: string;
                    total_votes: number;
                    nickname: string;
                }) => {
                    return (
                        <li key={playlist.playlist_id}>
                            <Link to={`/playlists/${playlist.playlist_id}`}>
                                <img
                                    src={getCuisineImg(playlist.cuisine)}
                                    alt={`${playlist.cuisine} food`}
                                />
                            </Link>
                            <div className="playlist-info">
                                <h2>
                                    <Link
                                        to={`/playlists/${playlist.playlist_id}`}
                                    >
                                        {playlist.name}
                                    </Link>
                                </h2>
                                <p>
                                    <b>{playlist.nickname}</b>
                                </p>
                                <p>
                                    {playlist.location ? (
                                        <Link
                                            to={`?location=${playlist.location}`}
                                        >
                                            {`#${playlist.location}`}
                                        </Link>
                                    ) : null}
                                    {playlist.location && playlist.cuisine
                                        ? " "
                                        : null}
                                    {playlist.cuisine ? (
                                        <Link
                                            to={`?cuisine=${playlist.cuisine}`}
                                        >
                                            {`#${playlist.cuisine}`}
                                        </Link>
                                    ) : null}
                                </p>
                                <div className="review-data">
                                    <p>{playlist.vote_count}</p>
                                    <Link className="star" to="">
                                        ⭐
                                    </Link>
                                    <Link className="star" to="">
                                        ⭐
                                    </Link>
                                    <Link className="star" to="">
                                        ⭐
                                    </Link>
                                    <Link className="star" to="">
                                        ⭐
                                    </Link>
                                    <Link className="star" to="">
                                        ⭐
                                    </Link>
                                    <p>Reviews: {playlist.total_votes}</p>
                                </div>
                            </div>
                        </li>
                    );
                }
            )}
        </ul>
    </div>
);
    
}


export default UserPlaylists;
