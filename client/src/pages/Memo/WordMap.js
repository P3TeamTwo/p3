import API from '../../utils/API'

import React, { useState } from 'react'


const WordMap = () => {

    const [imageApi, setImageApi] = useState();
    const [words, setWords] = useState();

    const userId = localStorage.getItem('userId')
    API.getJournal(userId)
        .then(res => {
            const text = [];
            res.data.map((daily) => {
                text.push(daily.longForm);
            })

            const allLong = text.join(' ')
            setWords(allLong)
        })
        .then(() => {
            fetch("https://textvis-word-cloud-v1.p.rapidapi.com/v1/textToCloud", {
                method: "POST",
                headers: {
                    "x-rapidapi-host": "textvis-word-cloud-v1.p.rapidapi.com",
                    "x-rapidapi-key": "727b25961amsh84487de4e64c10ep17ca98jsnaa8ee6b6e623",
                    "content-type": "application/json",
                    accept: "application/json"
                },
                body: JSON.stringify({
                    text: words,
                    scale: 1,
                    width: 750,
                    height: 750,
                    colors: ["#375E97", "#FB6542", "#FFBB00", "#3F681C"],
                    font: "Tahoma",
                    use_stopwords: true,
                    language: "en",
                    uppercase: false
                })
            })
                .then(response => {
                    return response.text();
                })
                .then(wordCloud => {

                    setImageApi(wordCloud);
                })
                .catch(err => {
                    console.log(err);
                });
        })
    return (
        <div style = {{marginLeft:"-20%",marginTop:"-20%"}}>
            <img src={imageApi}></img>
        </div>
    )
}

export default WordMap
