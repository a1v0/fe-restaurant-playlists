import { useEffect } from "react";
import { initAutocomplete } from "../google-api";

export default function CreatePlaylist() {
    useEffect(() => {
        initAutocomplete();
    }, []);

    const handleAddToPlaylist = () => {
        initAutocomplete().then(() => {
            console.log(JSON.parse(window.sessionStorage.googlePlaceId));
        });
    };

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
            }}
        >
            <input id="autocomplete" type="text" placeholder="hello"></input>
            <button onClick={handleAddToPlaylist}>add to playlist</button>
        </form>
    );
}
