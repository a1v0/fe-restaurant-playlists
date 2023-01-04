import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <div className="Nav">
            <ul>
                <li>
                    <Link to="/playlists">Playlists</Link>
                </li>
                <li>
                    <Link to="">Top Locations</Link>
                </li>
                <li>
                    <Link to="">Top Cuisines</Link>
                </li>
                <li>
                    <Link to="">Random playlist</Link>
                </li>
            </ul>
        </div>
    );
}
