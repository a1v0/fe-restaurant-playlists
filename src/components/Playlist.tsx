import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { deleteRestaurantFromPlaylist, getPlaylistById } from "../app-api";
import { getPlaceDetails } from "../google-api";
import { getCuisineImg } from "../utils";

function Playlist() {
    const { user, isAuthenticated } = useAuth0();
    const { playlist_id } = useParams();
    const [playlist, setPlaylist] = useState([
        {
            name: "",
            owner_nickname: "",
            location: "",
            cuisine: "",
            description: "",
            place_id: "",
        },
    ]);

    const [deleting, setDeleting] = useState(0);

    const [restaurantDetails, setRestaurantDetails] = useState([
        {
            name: "",
            formatted_address: "",
            photoUrl: "",
            url: "",
            website: "",
            placeId: "",
        },
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
    }, [playlist_id, deleting]);

    const handleDelete = (restaurant: { placeId: string }) => {
        deleteRestaurantFromPlaylist(
            Number(playlist_id),
            restaurant.placeId
        ).then(() => {
            setDeleting(deleting + 1);
        });
    };

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
                    {playlist[0].location ? (
                        <Link
                            to={`/playlists?location=${playlist[0].location}`}
                        >
                            {"#" + playlist[0].location}
                        </Link>
                    ) : null}
                    {playlist[0].location && playlist[0].cuisine ? " " : null}
                    {playlist[0].cuisine ? (
                        <Link to={`/playlists?cuisine=${playlist[0].cuisine}`}>
                            {"#" + playlist[0].cuisine}
                        </Link>
                    ) : null}
                </p>
            </div>
            <img
                src={getCuisineImg(playlist[0].cuisine)}
                className="cuisine-img"
                alt={`${playlist[0].cuisine} food`}
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
                                        rel="noreferrer"
                                    >
                                        (view website)
                                    </a>
                                </h3>
                                <p>{restaurant.formatted_address}</p>
                                {user?.nickname ===
                                playlist[0].owner_nickname ? (
                                    <div className="delete-restaurant-btn">
                                        <Link
                                            to=""
                                            onClick={() => {
                                                handleDelete(restaurant);
                                            }}
                                        >
                                            Remove from platelist
                                        </Link>
                                    </div>
                                ) : null}
                            </div>
                        </li>
                    );
                })}
            </ul>
        </main>
    );
}

export default Playlist;
