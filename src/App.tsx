import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Playlists from "./components/Playlists";
import LogoAndUser from "./components/LogoAndUser";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <div className="App">
      <LogoAndUser />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/playlists" element={<Playlists />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
