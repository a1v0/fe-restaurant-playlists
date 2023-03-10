import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Playlists from "./components/Playlists";
import LogoAndUser from "./components/LogoAndUser";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Playlist from "./components/Playlist";
import CreatePlaylist from "./components/CreatePlaylist";
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
    return (
        <div className="App">
            <LogoAndUser />
            <Nav />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
                <Route path="/playlists" element={<Playlists />}></Route>
                <Route
                    path="/playlists/:playlist_id"
                    element={<Playlist />}
                ></Route>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
