import { useEffect, useState } from "react";
import { postNewPlaylist } from "../app-api";
import { initAutocomplete } from "../google-api";
import { useAuth0 } from "@auth0/auth0-react";

export default function CreatePlaylist() {
    const initialState: string[] = [];
    const [restaurantsToAdd, setRestaurantsToAdd] = useState(initialState);
    const [restaurantAdded, setRestaurantAdded] = useState(false);
    const { user } = useAuth0();

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
            user?.email!,
            restaurantsToAdd
        );
    };

    return (
        <main className="CreatePlaylistPage">
            <h1>Create a New Playlist</h1>
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
                    Location
                    <input type="text" id="playlist-location"></input>
                </label>
                <label>
                    Cuisine
                    <input type="text" id="playlist-cuisine"></input>
                </label>
                <label>
                    Choose restaurants for your Playlist{" "}
                    <input
                        id="autocomplete"
                        type="text"
                        placeholder="type restaurant name"
                    ></input>
                </label>
                {restaurantAdded ? (
                    <p>
                        {restaurantsToAdd.length} restaurant
                        {restaurantsToAdd.length !== 1 ? "s" : null} added to
                        platelist
                    </p>
                ) : (
                    <p></p>
                )}
                <div className="form-buttons">
                    <button type="button" onClick={handleAddToPlaylist}>
                        Add Restaurant
                    </button>
                    <button type="submit">Create Playlist</button>
                </div>
            </form>
        </main>
    );
}
