import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <main className="Home">
            <div className="welcome">
                <section>
                    <h1>Restaurant Playlists</h1>
                    <p>
                        Food is delicious and sharing is caring. Why not share
                        delicious food with others?
                    </p>
                    <p>
                        Here at Restaurant Playlists, we make that simple. You
                        can create and share "playlists" of your favourite
                        restaurants.
                    </p>
                </section>
            </div>
            <div className="get-started">
                <h2>Get Started</h2>
                <p>
                    <strong>I want to...</strong>
                </p>
                <ul>
                    <li>
                        <Link to="/playlists">Browse</Link>
                    </li>
                    <li>Create an account</li>
                    <li>Select a random playlist</li>
                </ul>
            </div>
        </main>
    );
}
