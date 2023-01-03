import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPlaylistById } from "../api";

function Playlist() {
    const { playlist_id } = useParams();
    const [playlist, setPlaylist] = useState([
        {
            name: "",
            owner_nickname: "",
            location: "",
            cuisine: "",
            description: ""
        }
    ]);
    //  cuisine: "thai", description: "lorem ipsum lorem ipsum", location: "manchester", … }
    // place_id: "ChIJP8J3ZIVeeUgRlzmWlDEjXPc"
    // playlist_id: 0

    useEffect(() => {
        getPlaylistById(Number(playlist_id)).then((response) => {
            setPlaylist(response);
        });
    }, []);
    console.log(playlist);

    return (
        <main className="Playlist">
            <h2>{playlist[0].name}</h2>
            <div className="playlist-details">
                <p>{playlist[0].owner_nickname}</p>
                <p>
                    {playlist[0].location ? "#" + playlist[0].location : null}{" "}
                    {playlist[0].cuisine ? "#" + playlist[0].cuisine : null}
                </p>
            </div>
            <h1>Playlist Picture</h1>
            {playlist[0].description ? <p>{playlist[0].description}</p> : null}
            <ul>
                <li>
                    <h3>Restaurant Name</h3>
                    <p>Restaurant Address</p>
                </li>
                <li>
                    <h3>Restaurant Name</h3>
                    <p>Restaurant Address</p>
                </li>
                <li>
                    <h3>Restaurant Name</h3>
                    <p>Restaurant Address</p>
                </li>
                <li>
                    <h3>Restaurant Name</h3>
                    <p>Restaurant Address</p>
                </li>
            </ul>
        </main>
    );
}

export default Playlist;
