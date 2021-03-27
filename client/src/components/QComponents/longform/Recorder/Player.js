import React, { useState, useEffect,useRef } from "react";
import {FaPlay} from 'react-icons/fa'

const Player = ({ url }) => {
    //   const [playing, toggle] = useAudio(url);
    const audioElement = new Audio(url)
    console.log(url);
    return (
        <div>
            <audio src={url} ></audio>
            <button onClick={(e) => {
                e.preventDefault();
                audioElement.play()}
            }>
                <FaPlay size = {20}  color='red'  /></button>
        </div>
    );
};

export default Player;