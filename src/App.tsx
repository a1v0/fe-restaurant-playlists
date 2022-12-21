import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Playlists from './components/Playlists';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path="/playlists" element={<Playlists />}></Route>  
      </Routes>
      <Footer />
    </div>
  );
}

export default App;