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
    type: String,
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
    type: String,
    required: true
  },
  q3_3: {
    type: Number,
    required: true
  },
  q4_1: {
    type: String,
    required: true
  },
  q4_2: {
    type: String,
    required: true
  },
  q4_3: {
    type: String,
    required: true
  },
  longForm: {
    type: String,
    required: true
  },
  voiceMemo: {
    type: String,
    required: true
  }
});
const JournalEntry = mongoose.model("journalEntries", journalEntrySchema);
module.exports = JournalEntry;