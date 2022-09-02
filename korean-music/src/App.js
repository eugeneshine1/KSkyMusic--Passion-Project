import React from 'react';
import {useState,useEffect} from "react";
import './App.css';
import Player from "./components/Player";

const App=()=> {

const [songs,setSongs] = useState([
    {
        title: "1, 2, 3 (feat. BIG Naughty)",
        artist: "GEMINI",
        album: "1, 2, 3 (feat. BIG Naughty)",
        track: "",
        year: "",
        img_src: "~/Dev/KSkyMusic--Passion-project/korean-music/songs_images/1, 2, 3 (feat. BIG Naughty)_Cover (front)_e.jpg",
        src: "~/Dev/KSkyMusic--Passion-project/korean-music/songs/1, 2, 3 (feat. BIG Naughty).mp3"
    },
    {
        title: "Cold World",
        artist: "OVAN",
        album: "Cold World",
        track: "",
        year: "",
        img_src: "./songs_images/Cold World_Cover (front)_e.jpg",
        src: "./songs/Cold World.mp3"
    },
    {
        title: "DAFT LOVE (feat. DUT2 & msftz)",
        artist: "BOYCOLD",
        album: "DAFT LOVE",
        track: "",
        year: "",
        img_src: "./songs_images/DAFT LOVE (feat. DUT2 & msftz)_Cover (front)_e.jpg",
        src: "./songs/DAFT LOVE (feat. DUT2 & msftz).mp3"
    },
    {
        title: "Flying",
        artist: "DAVII",
        album: "Flying",
        track: "",
        year: "",
        img_src: "./songs_images/Flying_Cover (front)_e.jpg",
        src: "./songs/Flying.mp3"
    },
    {
        title: "Freak",
        artist: "ZICO",
        album: "Grown Ass Kid",
        track: "",
        year: "",
        img_src: "./songs_images/Freak_Cover (front)_e.jpg ",
        src: "./songs/Freak.mp3"
    },
    {
        title: "MR. BAD (feat. Woo)",
        artist: "pH-1",
        album: "MR. BAD (feat. Woo)",
        track: "",
        year: "",
        img_src: "./songs_images/MR. BAD (feat. Woo)_Cover (front)_e.jpg",
        src: "./songs/MR. BAD (feat. Woo).mp3"
    },
    {
        title: "Sariru (feat. ron)",
        artist: "Kid Milli",
        album: "BENZO",
        track: "",
        year: "",
        img_src: "./songs_images/Sariru (feat. ron)_Cover (front)_e.jpg",
        src: "./songs/Sariru (feat. ron).mp3"
    },
    {
        title: "SECRET (feat. MELOH)",
        artist: "D.Ark",
        album: "END OF PUBERTY",
        track: "",
        year: "",
        img_src: "./songs_images/SECRET (feat. MELOH)_Cover (front)_e.jpg",
        src: "./songs/SECRET (feat. MELOH).mp3"
    },
    {
        title: "Somebody!",
        artist: "Loco & Hwasas",
        album: "Somebody!",
        track: "",
        year: "",
        img_src: "./songs_images/Somebody!_Cover (front)_e.jpg",
        src: "./songs/Somebody!.mp3"
    },


]);


const [currentSongIndex,setCurrentSongIndex] = useState(0);
const [nextSongIndex,setNextSongIndex] = useState(currentSongIndex + 1);


useEffect(()=>{
  setNextSongIndex(()=>{
  if (currentSongIndex + 1 >songs.length - 1 ){
    return 0;
  } else{
    return currentSongIndex + 1;
  }
});
},[currentSongIndex])

  return (
    <div className="App">
    <Player currentSongIndex={currentSongIndex} setCurrentSongIndex={setCurrentSongIndex} nextSongIndex={nextSongIndex} songs={songs} />
    </div>
  );
}

export default App;