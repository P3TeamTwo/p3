import API from '../utils/API'
import React, { useState } from 'react'

// Importing dotenv to be able to use our .env file in react
require('dotenv').config()

const WordMap = () => {

    const WORDCLOUD_API_KEY = process.env.REACT_APP_WORDMAP_KEY;


    const [imageApi, setImageApi] = useState();
    const [words, setWords] = useState();

    const userId = localStorage.getItem('userId')
    API.getJournal(userId)
        .then(res => {

            //this array will hold all the long form answers
            const text = [];
            
            // taking all the long form 
            res.data.map((daily) => {
                // console.log(daily)
                text.push(daily.longForm);
                text.push(daily.moodState)
            })
            // Joining with space
            const allLong = text.join(' ')
            setWords(allLong)
        })
        // Api Call
        .then(() => {
            fetch("https://textvis-word-cloud-v1.p.rapidapi.com/v1/textToCloud", {
                method: "POST",
                headers: {
                    "x-rapidapi-host": "textvis-word-cloud-v1.p.rapidapi.com",
                    "x-rapidapi-key": WORDCLOUD_API_KEY,
                    "content-type": "application/json",
                    accept: "application/json"
                },
                // Configuration of word map
                body: JSON.stringify({
                    text: words,
                    scale: 1,
                    width: 750,
                    height: 750,
                    colors: ["#1a508b", "#a6dcef", "#957dad", "#a7d7c5", "#ffaaa5"],
                    font: "Tahoma",
                    use_stopwords: true,
                    language: "en",
                    uppercase: false
                })
            })
                .then(response => {
                    return response.text();
                })
                // Set the src of the Img element
                .then(wordCloud => {
                    setImageApi(wordCloud);
                })
                .catch(err => {
                    console.log(err);
                });
        })
    return (
        <div className='wordDiv'>
            <img className='wordCloud' src={imageApi}/>
        </div>
    )
}

export default WordMap
