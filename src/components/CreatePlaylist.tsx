import { useEffect, useState } from "react";
import { postNewPlaylist } from "../app-api";
import { initAutocomplete } from "../google-api";
import { useAuth0 } from "@auth0/auth0-react";

export default function CreatePlaylist(props: {
    rerender: number;
    setRerender: any;
}) {
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
        postNewPlaylist(
            event.target[0].value,
            event.target[1].value,
            event.target[2].value,
            event.target[3].value,
            user?.email!,
            restaurantsToAdd
        ).then(() => {
            props.setRerender(props.rerender + 1);
        });
    };

    return (
        <main className="CreatePlaylistPage">
            <h1>Create a New Platelist</h1>
            <form onSubmit={handleSubmit} className="CreatePlaylist">
                <label>
                    Platelist name
                    <input type="text" id="playlist-name" placeholder="Type Platelist name"></input>
                </label>
                <label>
                    Description
                    <input type="text" id="playlist-description" placeholder="Type Platelist description"></input>
                </label>
                <label>
                    Location
                    <input type="text" id="playlist-location" placeholder="Enter Platelist location"></input>
                </label>
                <label>
                    Cuisine
                    <input type="text" id="playlist-cuisine" placeholder="Type Platelist cuisine"></input>
                </label>
                <label>
                    Choose restaurants for your platelist{" "}
                    <input
                        id="autocomplete"
                        type="text"
                        placeholder="Type restaurant name"
                    ></input>
                </label>
                {restaurantAdded ? (
                    <p>restaurant added successfully</p>
                ) : (
                    <p></p>
                )}
                <div className="form-buttons">
                    <button type="button" onClick={handleAddToPlaylist}>
                        Add Restaurant
                    </button>
                    <button type="submit" className="playlist-submit">Create Platelist</button>
                </div>
            </form>
        </main>
    );
}
