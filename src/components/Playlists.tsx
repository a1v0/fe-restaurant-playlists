import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getPlaylists } from "../app-api";
import { getCuisineImg } from "../utils";
import VoteStars from "./VoteStars";

function Playlists() {
    const [playlistFilters, setPlaylistFilters] = useSearchParams();

    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        const locationFilter = playlistFilters.get("location");
        const cuisineFilter = playlistFilters.get("cuisine");
        getPlaylists(locationFilter, cuisineFilter).then((playlists) => {
            setPlaylists(playlists);
        });
    }, [playlistFilters]);

    return (
        <div className="Playlists">
            <h1>Restaurant Playlists</h1>
            <ul>
                {playlists.map(
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
                                        <VoteStars />
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

export default Playlists;
