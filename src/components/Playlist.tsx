import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPlaylistById } from "../app-api";
import { getPlaceDetails } from "../google-api";
import { getCuisineImg } from "../utils";

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
            photoUrl: "",
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
                const placeDetailsWithPhotoUrls = placeDetails.map((place) => {
                    const photoUrl = place.photos[0].getUrl();
                    place.photoUrl = photoUrl;
                    delete place.photos;
                    return place;
                });
                setRestaurantDetails(placeDetailsWithPhotoUrls);
            });
    }, [playlist_id]);

    return (
        <main className="Playlist">
            <div id="map">
                {/* This element, while empty, needs to be there for the Google API requests to work */}
            </div>
            <h2>{playlist[0].name}</h2>
            <div className="playlist-details">
                <p>
                    by <strong>{playlist[0].owner_nickname}</strong>
                </p>
                <p>
                    {playlist[0].location ? "#" + playlist[0].location : null}
                    {playlist[0].location && playlist[0].cuisine ? " " : null}
                    {playlist[0].cuisine ? "#" + playlist[0].cuisine : null}
                </p>
            </div>
            <img
                src={getCuisineImg(playlist[0].cuisine)}
                className="cuisine-img"
            />
            {playlist[0].description ? (
                <p className="playlist-description">
                    {playlist[0].description}
                </p>
            ) : null}
            <ul>
                {restaurantDetails.map((restaurant) => {
                    return (
                        <li key={restaurant.placeId}>
                            <img
                                src={restaurant.photoUrl}
                                className="restaurant-image"
                                alt={restaurant.name}
                            />
                            <div className="restaurant-details">
                                <h3>
                                    {restaurant.name}
                                    <a
                                        href={restaurant.website}
                                        target="_blank"
                                    >
                                        (view website)
                                    </a>
                                </h3>
                                <p>{restaurant.formatted_address}</p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </main>
    );
}

export default Playlist;
