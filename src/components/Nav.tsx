import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <div className="Nav">
            <ul>
                <li>
                    <Link to="/playlists">Playlists</Link>
                </li>
                <li>Top Locations</li>
                <li>Top Cuisines</li>
                <li>Random playlist</li>
            </ul>
        </div>
    );
}
