const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const journalEntrySchema = new Schema({
  postedBy: {type: Schema.Types.ObjectId, ref: "users", 
    required: true
  },
  created_at: { type: Date, 
    required: true, 
    default: Date.now 
  },
  mood: {type: String,
    required: true
  },
  moodPoints: {
    type: Number,
    required: true
  },
  q1: {
    type: String,
    required: true
  },
  q1Points: {
    type: Number,
    required: true
  },
  q2: { 
    type: String,
    required: true
  },
  q2Points: {
    type: Number,
    required: true
  },
  q3: { 
    type: String,
    required: true
  },
  q3Points: {
    type: Number,
    required: true
  },
  q4: { 
    type: String,
    required: true
  },
  q4Points: {
    type: Number,
    required: true
  },
  finalScore: {
    type: Number,
    required: true
  }


});
const JournalEntry = mongoose.model("journalEntries", journalEntrySchema);
module.exports = JournalEntry;