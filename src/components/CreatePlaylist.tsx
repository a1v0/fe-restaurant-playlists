import { useEffect, useState } from "react";
import { initAutocomplete } from "../google-api";

export default function CreatePlaylist() {
    const initialState: string[] = [];
    const [restaurantsToAdd, setRestaurantsToAdd] = useState(initialState);
    const [restaurantAdded, setRestaurantAdded] = useState(false);

    useEffect(() => {
        initAutocomplete();
        console.log(restaurantsToAdd);
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

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
            }}
        >
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
                <button onClick={handleAddToPlaylist}>add restaurant</button>
                {restaurantAdded ? <p>restaurant added successfully</p> : null}
            </label>
            <button type="submit">Create Playlist</button>
        </form>
    );
}
