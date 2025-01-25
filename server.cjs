const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const path = require('path');
const cors = require('cors');


app.use(cors());


const app = express();
const PORT = 5000;

// MongoDB connection
const mongoURI = 'mongodb+srv://name1:9ptC5djlwYCtLNv1@cluster0.kcuuj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const conn = mongoose.createConnection(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

let gfs;
conn.once('open', () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads');
});


const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    
    if (file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png') {
      return null; 
    }
    return {
      filename: `${Date.now()}-${file.originalname}`,
      bucketName: 'uploads',
    };
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    
    if (file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png') {
      return cb(new Error('Only JPG and PNG files are allowed!'), false);
    }
    cb(null, true); 
  },
});


app.post('/upload', upload.single('file'), (req, res) => {
  res.json({ file: req.file });
});


app.get('/files/:filename', (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    if (!file || file.length === 0) {
      return res.status(404).json({ error: 'File not found' });
    }

   
    if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
      const readStream = gfs.createReadStream(file.filename);
      readStream.pipe(res);
    } else {
      res.status(400).json({ error: 'Not an image file' });
    }
  });
});


app.get('/', (req, res) => {
  res.send('server started successfully');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});








// const express = require('express');
// const mongoose = require('mongoose');
// const multer = require('multer');
// const { GridFsStorage } = require('multer-gridfs-storage');
// const Grid = require('gridfs-stream');
// const path = require('path');

// const app = express();
// const PORT = 5000;


// // MongoDB connection
// const mongoURI = 'mongodb+srv://name1:9ptC5djlwYCtLNv1@cluster0.kcuuj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
// const conn = mongoose.createConnection(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// let gfs;
// conn.once('open', () => {
//   gfs = Grid(conn.db, mongoose.mongo);
//   gfs.collection('uploads');
// });

// // Storage setup for Multer + GridFS
// const storage = new GridFsStorage({
//   url: mongoURI,
//   file: (req, file) => {
//     return {
//       filename: `${Date.now()}-${file.originalname}`,
//       bucketName: 'uploads',
//     };
//   },
// });

// const upload = multer({ storage });

// // Route for uploading files
// app.post('/upload', upload.single('file'), (req, res) => {
//   res.json({ file: req.file });
// });

// // Route for fetching files
// app.get('/files/:filename', (req, res) => {
//   gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
//     if (!file || file.length === 0) {
//       return res.status(404).json({ error: 'File not found' });
//     }

//     // Check if it's a 3D model (.glb)
//     if (file.contentType === 'model/gltf-binary') {
//       const readStream = gfs.createReadStream(file.filename);
//       readStream.pipe(res);
//     } else {
//       res.status(400).json({ error: 'Not a 3D model file' });
//     }
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
