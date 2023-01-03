import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPlaylistById } from "../app-api";
import { getPlaceDetails } from "../google-api";

function Playlist() {
    const { playlist_id } = useParams();
    const [playlist, setPlaylist] = useState([
        {
            name: "",
            owner_nickname: "",
            location: "",
            cuisine: "",
            description: "",
            place_id: ""
        }
    ]);

    const [restaurantDetails, setRestaurantDetails] = useState([
        {
            name: "",
            formatted_address: "",
            photos: [],
            url: "",
            website: "",
            placeId: ""
        }
    ]);

    useEffect(() => {
        getPlaylistById(Number(playlist_id))
            .then((response) => {
                setPlaylist(response);
                const placeDetails = response.map(
                    (restaurant: { place_id: string }) => {
                        return getPlaceDetails(restaurant.place_id);
                    }
                );
                return Promise.all(placeDetails);
            })
            .then((placeDetails) => {
                setRestaurantDetails(placeDetails);
            });
    }, [playlist_id]);

    return (
        <main className="Playlist">
            <div id="map">
                {/* This element, while empty, needs to be there for the Google API requests to work */}
            </div>
            <h2>{playlist[0].name}</h2>
            <div className="playlist-details">
                <p>{playlist[0].owner_nickname}</p>
                <p>
                    {playlist[0].location ? "#" + playlist[0].location : null}
                    {playlist[0].location && playlist[0].cuisine ? " " : null}
                    {playlist[0].cuisine ? "#" + playlist[0].cuisine : null}
                </p>
            </div>
            {/* ***TO DO*** add playlist picture based on cuisine, like on Playlists component */}
            <h1>Playlist Picture</h1>
            {playlist[0].description ? <p>{playlist[0].description}</p> : null}
            <ul>
                {restaurantDetails.map((restaurant) => {
                    return <li key={restaurant.placeId}>{restaurant.name}</li>;
                })}
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
