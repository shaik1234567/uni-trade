const { postsmodel } = require("../model/post.model");



const createpost = async (req, res) => {
    try {
      // Convert the image to Base64
      const imageBase64 = req.file ? req.file.buffer.toString('base64') : '';
  
      // Create a new post with the image string
      const newPost = new postsmodel({
        userid: req.body.userid,
        desc: req.body.desc,
        image: imageBase64, // Store Base64 string in DB
      });
  
      await newPost.save();
      res.status(200).json('Post Created');
    } catch (e) {
      console.error(e);
      res.status(500).json(e);
    }
  };

const getpost = async (req , res) => {
    let id = req.params.id;
    try{
        const post = await postsmodel.findById(id);
        res.status(200).json(post)

    }catch(e){
        res.status(500).json(e)
    }
}

const constgetposts = async ( req , res) => {
 
  try{
    let posts = await postsmodel.find();
    res.status(200).json(posts);

  }catch(e){
    res.status(500).json(e);
  }
}


module.exports ={ 
    createpost,
    getpost,
    constgetposts
}