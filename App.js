import React from 'react';
import './App.css';
import SongOverview from "./songOverView.js"

function App() {
  return (
    <div className="App">
      <h1 style={{width:"100%", backgroundColor: "#74BDCB", color: "white"}}>My Playlist App</h1>
      <SongOverview />
    </div>
  );
}

export default App;
