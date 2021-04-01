
// const db = process.env.MONGODB_URI || 'mongodb://localhost/journal';
const mongoose = require("mongoose");
const multer = require("multer");
const Grid = require("gridfs-stream");
const GridFsStorage = require("multer-gridfs-storage");
const db = mongoose.connection;

let gfs;
db.once("open", function() {
  gfs = Grid(db.db, mongoose.mongo);
});



const storage = new GridFsStorage({
  url:
    url,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString("hex") + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: "uploads"
        };
        resolve(fileInfo);
      });
    });
  }
});
// sets file input to single file

const singleUpload = multer({ storage: storage }).single('file');

router.get('/files/:filename', (req, res) => {
    gfs.files.find({ filename: req.params.filename }).toArray((err, files) => {
        if (!files || files.length === 0) {
            return res.status(404).json({
                message: "Could not find file"
            });
        }
        var readstream = gfs.createReadStream({
            filename: files[0].filename
        })
        res.set('Content-Type', files[0].contentType);
        return readstream.pipe(res);
    });
});

router.get('/files', (req, res) => {
    gfs.files.find().toArray((err, files) => {
        if (!files || files.length === 0) {
            return res.status(404).json({
                message: "Could not find files"
            });
        }
        return res.json(files);
    });
});


    router.post('/files', singleUpload, (req, res) => {
    if (req.file) {
        return res.json({
            success: true,
            file: req.file
        });
    }
    res.send({ success: false });
});

router.delete('/files/:id', (req, res) => {
    gfs.remove({ _id: req.params.id }, (err) => {
        if (err) return res.status(500).json({ success: false })
        return res.json({ success: true });
    })
})

module.exports = router;