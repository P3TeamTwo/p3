import React from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size';
import {  MdBook } from 'react-icons/md';
import { Button } from '@material-ui/core';

const Results = ({ onClick }) => {
    const { width, height } = useWindowSize()
    const colors = ["#1a508b", "#a6dcef", "#957dad", "#a7d7c5", "#ffaaa5"]
      return (
        <div>
            <Confetti
            width={width}
            height={height}
            className='confetti'
            colors={colors}
            />
            <div>
                <MdBook className='material-icons'/>
                <h3>Journal Complete</h3>
                <Button style={{ boxShadow: "3px 3px 10px rgba(0,0,0,0.2)" }} onClick={onClick}>Submit Entry</Button>
            </div>
            
        </div>
    )
}

export default Results
