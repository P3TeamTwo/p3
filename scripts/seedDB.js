const mongoose = require("mongoose");
const db = require("../models");

// This file empties the journal collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/journal"
);

const journalSeed = [
    {
        // title: Date.now(),
        emotion: 2,
        emotionPoints: 30,
        q1: false,
        q1Points: 30,
        q2: false,
        q2Points: 30,
        q3: true,
        q3Points: 30,
        q4: false,
        q4Points: 50
    }

];

db.JournalEntry
    .remove({})
    .then(() => db.JournalEntry.collection.insertMany(journalSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });