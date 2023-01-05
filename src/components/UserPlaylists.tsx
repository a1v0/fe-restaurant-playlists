import { useEffect, useState } from "react";
import { deletePlaylistById, getPlaylistByUser } from "../app-api";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { getCuisineImg } from "../utils";
function UserPlaylists() {
    const [userPlaylists, setUserPlaylists] = useState([]);
    const [deleting, setDeleting] = useState(false);
    const { user, isAuthenticated } = useAuth0();

    useEffect(() => {
        if (isAuthenticated) {
            getPlaylistByUser(user?.email!).then((response) => {
                setUserPlaylists((currPlaylists) => {
                    return response;
                });
            });
        }
    }, [isAuthenticated, deleting]);

    function handleDelete(playlist_id: number) {
        setDeleting(true);
        deletePlaylistById(playlist_id).then((res) => {
            setDeleting(false);
        });
    }

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
                                            <div>{`#${playlist.location}`}</div>
                                        ) : null}
                                        {playlist.location && playlist.cuisine
                                            ? " "
                                            : null}
                                        {playlist.cuisine ? (
                                            <div>{`#${playlist.cuisine}`}</div>
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
                                    <div className="delete-button">
                                        {user?.name === playlist.nickname ? (
                                            <button
                                                id="delete-playlist"
                                                onClick={(event) => {
                                                    handleDelete(
                                                        playlist.playlist_id
                                                    );
                                                }}
                                            >
                                                Delete
                                            </button>
                                        ) : null}
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
