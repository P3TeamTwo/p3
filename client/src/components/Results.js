import React from 'react'
import {  MdSentimentVerySatisfied } from 'react-icons/md';


const Results = ({ finalScore }) => {
    return (
        <div>
            <div>
                <MdSentimentVerySatisfied className='material-icons'/>
                <h3>Your mood score is {finalScore}</h3>
            </div>
            
        </div>
    )
}

export default Results
