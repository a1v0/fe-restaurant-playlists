import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import AuthenticationButton from "./Authentication";

export default function Home() {
    const { user } = useAuth0();
    return (
        <main className="Home">
            <div className="welcome">
                <section>
                    <h1>Munchify</h1>
                    <p>
                        Food is delicious and sharing is caring. Why not share
                        delicious food with others?
                    </p>
                    <p>
                        Here at Munchify, we make that simple. You can create
                        and share "platelists" of your favourite restaurants.
                    </p>
                </section>
            </div>
            <div className="get-started">
                <h2>Get Started</h2>
                <div>
                    <p>
                        <strong>I want to...</strong>
                    </p>
                    <ul>
                        <li>
                            <Link to="/playlists">Browse all platelists</Link>
                        </li>
                        <li>
                            <AuthenticationButton /> (you can also create a new
                            Munchify account here)
                        </li>
                        {/* <li>Select a random platelist</li> */}
                    </ul>
                </div>
            </div>
            <div className="explanation">
                <p>
                    <strong>Munchify</strong> is the brainchild of the four
                    chief execs of YMCA Productions, a multinational start-up
                    factory based in San Francisco.
                </p>
                <p>
                    Their other triumphs include <strong>Lunchify</strong>{" "}
                    (platelists of midday meal recipes),{" "}
                    <strong>Brunchify</strong> (platelists of late-morning meal
                    recipes), <strong>Crunchify</strong> (platelists of baked or
                    fried goods with a crispy texture) and{" "}
                    <strong>Hunchify</strong> (platelists of vague intuitions).
                </p>
            </div>
        </main>
    );
}
