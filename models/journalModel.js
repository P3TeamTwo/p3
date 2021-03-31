const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const journalEntrySchema = new Schema({
  postedBy: {type:String , ref: "users", 
    required: true
  },
  created_at: { type: Date, 
    required: true, 
    default: Date.now 
  },
  mood: {type: String,
    required: true
  },
  moodState: {
    type: String,
    required: true
  },
  q1_1: {
    type: Number,
    required: true
  },
  q1_2: {
    type: String,
    required: true
  },
  q1_3: {
    type: Number,
    required: true
  },
  q2_1: {
    type: Number,
    required: true
  },
  q2_2: {
    type: Number,
    required: true
  },
  q2_3: {
    type: Number,
    required: true
  },
  q3_1: {
    type: String,
    required: true
  },
  q3_2: {
    type: Number,
    required: true
  },
  q3_3: {
    type: Number,
    required: true
  },
  q4_1: {
    type: String,
    required: false
  },
  q4_2: {
    type: String,
    required: false
  },
  q4_3: {
    type: String,
    required: false
  },
  longForm: {
    type: String,
    required: false
  },
  longFormQuestion: {
    type: String,
    required: false
  },
  voiceMemo: {
    type: String,
    required: false
  }
});
const JournalEntry = mongoose.model("journalEntries", journalEntrySchema);
module.exports = JournalEntry;