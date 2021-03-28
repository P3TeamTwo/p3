import API from '../../utils/API'
import unirest from "unirest";

import React, { useState } from 'react'


const WordMap = () => {

    const [imageApi, setImageApi] = useState();
    const [words, setWords] = useState();

    const userId = localStorage.getItem('userId')
    API.getJournal(userId)
    .then(res => {
        console.log(res)
    })

    fetch("https://textvis-word-cloud-v1.p.rapidapi.com/v1/textToCloud", {
        method: "POST",
        headers: {
            "x-rapidapi-host": "textvis-word-cloud-v1.p.rapidapi.com",
            "x-rapidapi-key": "727b25961amsh84487de4e64c10ep17ca98jsnaa8ee6b6e623",
            "content-type": "application/json",
            accept: "application/json"
        },
        body: JSON.stringify({
            text:"hello there darling",
            scale: 1,
            width: 800,
            height: 800,
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

    return (
        <div>

            <img src = {imageApi}></img>
        </div>
    )
}

export default WordMap

// {
//     "statusCode": 200,
//     "body": "data:image/png;base64,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",
//     "headers": {
//         "access-control-allow-credentials": "true",
//         "access-control-allow-origin": "http://localhost:3000",
//         "connection": "keep-alive",
//         "content-length": "7290",
//         "content-type": "text/html; charset=utf-8",
//         "date": "Sat, 27 Mar 2021 20:18:15 GMT",
//         "etag": "W/\"1c7a-P9Xv5n566SaQG4oKiuha71QuoNk\"",
//         "server": "RapidAPI-1.2.7",
//         "via": "1.1 8d6071bd169bbf5fd46638140132b1d1.cloudfront.net (CloudFront)",
//         "x-amz-apigw-id": "c3PpGHb8LPEFo4g=",
//         "x-amz-cf-id": "zQmBqlT6PDa--lMJ2o_jceaB2tSvSxXdYnezhr1f2Guzifg8AvF4lg==",
//         "x-amz-cf-pop": "IAD89-C3",
//         "x-amzn-remapped-content-length": "7290",
//         "x-amzn-requestid": "8e292af5-2aa6-48e3-aee6-4af8c1398a66",
//         "x-amzn-trace-id": "Root=1-605f9306-66747ad1132a7cab39e70ba3;Sampled=0",
//         "x-cache": "Miss from cloudfront",
//         "x-powered-by": "Express",
//         "x-rapidapi-region": "AWS - us-east-1",
//         "x-rapidapi-version": "1.2.7"
//     },
//     "request": {
//         "uri": {
//             "protocol": "https:",
//             "slashes": true,
//             "auth": null,
//             "host": "textvis-word-cloud-v1.p.rapidapi.com",
//             "port": 443,
//             "hostname": "textvis-word-cloud-v1.p.rapidapi.com",
//             "hash": null,
//             "search": null,
//             "query": null,
//             "pathname": "/v1/textToCloud",
//             "path": "/v1/textToCloud",
//             "href": "https://textvis-word-cloud-v1.p.rapidapi.com/v1/textToCloud"
//         },
//         "method": "POST",
//         "headers": {
//             "content-type": "application/json",
//             "x-rapidapi-key": "727b25961amsh84487de4e64c10ep17ca98jsnaa8ee6b6e623",
//             "x-rapidapi-host": "textvis-word-cloud-v1.p.rapidapi.com",
//             "useQueryString": true,
//             "accept": "application/json",
//             "content-length": 289
//         }
//     }
// }