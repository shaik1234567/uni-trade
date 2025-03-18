const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../config');
const bcrypt = require('bcrypt');
const { registermodel } = require('../model/register.model')


router.route('/register').post(async (req, res) => {
    try {
        let { username, email, rollno, password } = req.body;
        username = username.trim();
        email = email.trim();
        rollno = rollno.trim();
        console.log('Request body:', req.body);

        const erollno = await registermodel.findOne({ rollno });
        const eemail = await registermodel.findOne({ email });
        if (eemail) {
            return res.status(400).json({ message: 'User with the same email already exists' });
        }
        if (erollno) {
            return res.status(400).json({ message: 'User with the same roll number already exists' });
        }

        const haeshedpassword = await bcrypt.hashSync(password, 8)

        await registermodel.create({
            username,
            email,
            rollno,
            password: haeshedpassword
        });
        res.status(200).send('Registartion succeful')
    } catch (e) {
        console.error(e);
        res.status(500).send('Fail while Registration ');
    }

})

router.route('/login').post(async (req, res) => {
    try {

        const { rollno, password } = req.body;

        console.log(rollno, password)

        let isUser = await registermodel.findOne({ rollno })
        if (!isUser) {
            return res.status(400).send("User Not FOund");
        }

        let isPassValid = bcrypt.compareSync(password, isUser.password);


        if (!isPassValid) {
            return res.status(400).send(" PASS is INVALID")
        }
        let token = jwt.sign({ id: isUser._id, userName: isUser.username }, config.secret, { expiresIn: '30m' })
        res.status(200).send({ auth: true, token })

    } catch (e) {
        console.error(e);
        res.status(500).send('error : while LOgin!!')
    }
})

router.route('/userinfo').get(async (req, res) => {
    const token = req.headers['x-access-token'];
    if (!token) {
        return res.status(400).send({ auth: false, token: 'Token not Found' })
    }


    try {
        const decoded = await jwt.verify(token, config.secret);
        const user = await registermodel.findById(decoded.id);
        if (!user) {
            return res.status(404).send({ auth: false, token: 'No User Found' });
        }
        res.send(user)

    } catch (e) {
        if (e.name === 'JsonWebTokenError') {
            return res.status(401).send({ auth: false, token: 'Invalid Token Found' })
        }
        res.status(500).send({ auth: false, token: 'There was a problem with user info' })
    }

})

router.route('/getusers').get(async (req, res) => { 
    try{
        const users = await registermodel.find();
      res.json(users)

    }catch(e){
        return res.status(500).send('Error : while fetching users in db ')
    }

})

module.exports = { router }
