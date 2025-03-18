const express = require('express');
const { getuser, updateuser } = require('../Controler/user.controler');

const userRouter = express.Router();
userRouter.get('/:id', getuser);

//update user 
userRouter.put('/:id' ,updateuser );

module.exports = {userRouter};
