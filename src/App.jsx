import React, { useState } from 'react';
import { Route, Routes, useLocation } from "react-router-dom"
import Sidebar from "./components/sidebar/sidebar";
import Main from './components/main-content/main';
import Popularartist from './components/popular-artists/popularartist';
import Audioplayer from './components/audio_player/audioplayer';
import NotFound from "./components/notfound/notfound";
import Arrahman from './components/artists/arrahman/arrahman';
import Anirudh from "./components/artists/anirudh/anirudh";
import Illaiyaraja from './components/artists/illaiyaraja/illai';
import U1 from './components/artists/yuvan/u1';
import HarrisJayaraj from './components/artists/harris-jayaraj/harrisjayaraj';
import anisongs from "./components/artists/anirudh/anisongs";
import arrsongs from "./components/artists/arrahman/arrsongs";
import illaisongs from "./components/artists/illaiyaraja/illaisongs";
import u1songs from "./components/artists/yuvan/u1songs";
import harrisongs from "./components/artists/harris-jayaraj/harrisongs"

function App() {
  const [currentArtist, setCurrentArtist] = useState('arrahman');
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const location = useLocation();

  const handleSongClick = (artist, index) => {
    setCurrentArtist(artist);
    setCurrentSongIndex(index);
  };

  return (
    <>
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/popular" element={<Popularartist />} />
        <Route exact path="/arrahman" element={<Arrahman songs={arrsongs} onSongClick={(index) => handleSongClick('arrahman', index)} />} />
        <Route exact path="/anirudh" element={<Anirudh songs={anisongs} onSongClick={(index) => handleSongClick('anirudh', index)} />} />
        <Route exact path="/illaiyaraja" element={<Illaiyaraja songs={illaisongs} onSongClick={(index) => handleSongClick('illaiyaraja', index)} />} />
        <Route exact path="/u1" element={<U1 songs={u1songs} onSongClick={(index) => handleSongClick('u1', index)} />} />
        <Route exact path="/harrisjayaraj" element={<HarrisJayaraj songs={harrisongs} onSongClick={(index) => handleSongClick('harrisjayaraj', index)} />} />
        
        <Route element={<NotFound />} />
      </Routes>
      {(currentArtist === "arrahman" || currentArtist === "anirudh" || currentArtist === "illaiyaraja" || currentArtist === "u1" || currentArtist === "harrisjayaraj") && 
        <Audioplayer src={
          currentArtist === "arrahman" ? arrsongs[currentSongIndex].src : 
          (currentArtist === "anirudh" ? anisongs[currentSongIndex].src : 
          (currentArtist === "illaiyaraja" ? illaisongs[currentSongIndex].src :
          (currentArtist === "u1" ? u1songs[currentSongIndex].src :
          (currentArtist === "harrisjayaraj" ? harrisongs[currentSongIndex].src :null))))} />
      }
    </>
  );
}

export default App;
