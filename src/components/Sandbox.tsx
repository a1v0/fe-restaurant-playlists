import React, { useEffect, useState } from "react";
import { getPlaceDetails, initAutocomplete } from "../google-api";

export default function Sandbox() {
    useEffect(() => {
        initAutocomplete();
    }, []);
    return (
        <div>
            <h2>autocomplete sandbox</h2>
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
        </div>
    );
}
