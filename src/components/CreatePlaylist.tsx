import { useEffect } from "react";
import { initAutocomplete } from "../google-api";

export default function CreatePlaylist() {
    useEffect(() => {
        initAutocomplete();
    }, []);
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                initAutocomplete().then(() => {
                    console.log(
                        JSON.parse(window.sessionStorage.googlePlaceId)
                    );
                });
            }}
        >
            <input
                id="autocomplete"
                type="text"
                placeholder="hello"
                onBlur={() => {}}
            ></input>
            <button>add to playlist</button>
        </form>
    );
}
