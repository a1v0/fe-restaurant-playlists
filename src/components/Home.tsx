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
            <div>
      {/* <img src="https://images.pexels.com/photos/6150432/pexels-photo-6150432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img> */}
      <div className="navbar-nav ml-auto">
        <p>Log In here to create your own</p>
        <AuthenticationButton />
      </div>
    </div>
        </main>
    );
}
