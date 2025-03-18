const express = require('express');
const { createpost, getpost, constgetposts } = require('../Controler/posts.controler');
const postsroute = express.Router();
const multer = require('multer');
// Multer Configuration
const storage = multer.memoryStorage(); // Store in memory
const upload = multer({ storage: storage });
postsroute.post('/createpost',  upload.single('image'),createpost)
postsroute.get('/getallposts' , constgetposts)
postsroute.get('/:id' , getpost)



module.exports = { 
    postsroute
}