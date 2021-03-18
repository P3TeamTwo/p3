const mongoose = require("mongoose");
const db = require("../models");

// This file empties the journal collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/journal"
);

const journalSeed = [
    {
        title: "Tuesday 16th March",
        body: "Today was a really good day",
        array: [{
            would: "we",
            store: "answers",
            as: "key",
            value: "pairs?"
        }]
    },
    {
        title: "Tuesday 15th March",
        body: "Today was also an amazing day",
        array: [{
            would: "we",
            store: "answers",
            as: "key",
            value: "pairs?"
        }]
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