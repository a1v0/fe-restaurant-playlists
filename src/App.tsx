import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Playlists from "./components/Playlists";
import LogoAndUser from "./components/LogoAndUser";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Playlist from "./components/Playlist";

function App() {
    return (
        <div className="App">
            <LogoAndUser />
            <Nav />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/playlists" element={<Playlists />}></Route>
                <Route path = "/playlists/:playlist_id" element={<Playlist />}></Route>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
