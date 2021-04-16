const db = require("../models");

const today = new Date();
const lastWeekStart = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
const lastMonthStart = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 30);

// Defining methods for the journalController
module.exports = {
  findAll: function (req, res) {
    db.JournalEntry
      .find(req.params.id,
        {
          created_at: {
            $gt: lastWeekStart
          }
        })
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
//FIND ALL ANTRIES EVER MADE - THE CALENDAR NEEDS THIS SEPERATELY!! 
  // findAll: function(req, res) {
  //   db.JournalEntry
  //     .find(req.params.id)
  //     .sort({ date: -1 })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },

  //FIND ENTRIES IN LAST 7 DAYS
  findById: function (req, res) {
    db.JournalEntry.find({
        $and: [ 
          {"postedBy": req.params.id},
          {"created_at":{
            $gte: new Date((new Date().getTime() - (7 * 24 * 60 * 60 * 1000)))
          }}
        ]
        }).sort({"created_at": -1})
      .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
},

//FIND ENTRIES IN LAST 30 DAYS
  findById: function (req, res) {
    db.JournalEntry.find({
        $and: [ 
          {"postedBy": req.params.id},
          {"created_at":{
            $gte: new Date((new Date().getTime() - (30 * 24 * 60 * 60 * 1000)))
          }}
        ]
        }).sort({"created_at": -1})
      .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
},




  create: function (req, res) {
    db.JournalEntry
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log(err));
  },
update: function (req, res) {
  db.JournalEntry
    .findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
},
remove: function (req, res) {
  db.JournalEntry
    .findById({ _id: req.params.id })
    .then(dbModel => dbModel.remove())
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
}
};
