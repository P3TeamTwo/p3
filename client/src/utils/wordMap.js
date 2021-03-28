import unirest from "unirest";
import axios from "axios";

export default {

    
    getWordMap: function () {
        const uri = null;
        console.log('hi')
        var req = unirest("POST", "https://textvis-word-cloud-v1.p.rapidapi.com/v1/textToCloud");

        req.headers({
            "content-type": "application/json",
            "x-rapidapi-key": "727b25961amsh84487de4e64c10ep17ca98jsnaa8ee6b6e623",
            "x-rapidapi-host": "textvis-word-cloud-v1.p.rapidapi.com",
            "useQueryString": true
        });

        req.type("json");
        req.send({
            "text": "This is a test. I repeat, this is a test. We are only testing the functionality of this api, nothing else. End of test.",
            "scale": 0.5,
            "width": 400,
            "height": 400,
            "colors": [
                "#375E97",
                "#FB6542",
                "#FFBB00",
                "#3F681C"
            ],
            "font": "Tahoma",
            "use_stopwords": true,
            "language": "en",
            "uppercase": false
        });

        req.end(function (res) {
            if (res.error) throw new Error(res.error);
            console.log(res.body);
            uri =  res.body;
        });
        console.log(uri)
    }
}
