import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <div className="Nav">
            <ul>
                <li>
                    <Link to="/playlists">Platelists</Link>
                </li>
                <li>
                    <Link to="">Top Locations</Link>
                </li>
                <li>
                    <Link to="">Top Cuisines</Link>
                </li>
                <li>
                    <Link to="">Random platelist</Link>
                </li>
            </ul>
        </div>
    );
}
