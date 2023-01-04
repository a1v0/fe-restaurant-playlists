import { useEffect, useState } from "react";
import { postNewPlaylist } from "../app-api";
import { initAutocomplete } from "../google-api";

export default function CreatePlaylist() {
    const initialState: string[] = [];
    const [restaurantsToAdd, setRestaurantsToAdd] = useState(initialState);
    const [restaurantAdded, setRestaurantAdded] = useState(false);

    useEffect(() => {
        initAutocomplete();
    }, [restaurantsToAdd]);

    const handleAddToPlaylist = () => {
        initAutocomplete().then(() => {
            setRestaurantsToAdd([
                ...restaurantsToAdd,
                JSON.parse(window.sessionStorage.googlePlaceId),
            ]);
            setRestaurantAdded(true);
        });
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        // *** TO DO *** add dynamic owner email to function
        postNewPlaylist(
            event.target[0].value,
            event.target[1].value,
            event.target[2].value,
            event.target[3].value,
            "ymca@restaurant-playlists.com",
            restaurantsToAdd
        );
    };

    return (
        <form onSubmit={handleSubmit} className="CreatePlaylist">
            <label>
                Playlist name
                <input type="text" id="playlist-name"></input>
            </label>
            <label>
                Description
                <input type="text" id="playlist-description"></input>
            </label>
            <label>
                location
                <input type="text" id="playlist-location"></input>
            </label>
            <label>
                cuisine
                <input type="text" id="playlist-cuisine"></input>
            </label>
            <label>
                Choose restaurants for your playlist{" "}
                <input
                    id="autocomplete"
                    type="text"
                    placeholder="type restaurant name"
                ></input>
                <button type="button" onClick={handleAddToPlaylist}>
                    add restaurant
                </button>
                {restaurantAdded ? <p>restaurant added successfully</p> : null}
            </label>
            <button type="submit">Create Playlist</button>
        </form>
    );
}
