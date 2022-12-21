import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Playlists from "./components/Playlists";
import LogoAndUser from "./components/LogoAndUser";
import Nav from "./components/Nav";

function App() {
    return (
        <div className="App">
            <LogoAndUser />
            <Nav />
            <Routes>
                <Route path="/playlists" element={<Playlists />}></Route>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
