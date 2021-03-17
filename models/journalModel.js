const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const journalEntrySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
  },
  array: [{ 
    type: String
  }]


});
const JournalEntry = mongoose.model("journalEntries", journalEntrySchema);
module.exports = JournalEntry;