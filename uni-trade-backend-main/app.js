const express = require('express');
const cors = require('cors');
const { router } = require('./Routes/Route');
const app = express();
const mongoose = require('mongoose');
const {  userRouter } = require('./Routes/UserRoute');
const { postsroute } = require('./Routes/Postsroutes');
app.use(cors());
app.use(express.json());

mongoose.connect(`mongodb://localhost:27017/uni-trade`)
app.get('/' , (req , res) => {
    res.send('This is Uni-trade homepage');
})

  
app.use('/api' , router);
app.use('/users' ,userRouter );
app.use('/posts' , postsroute);

app.listen(5005, () => {
    console.log(`server is running on port on 5005`);
})