const express = require('express');
const router = express.Router();
const UserScheema = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "shujaatullahkhan";
const fetchuser = require('../middleware/fetchuser');

router.post('/createuser', async (req, res) => {
    let success = false;
    try {
        const { firstname, lastname, email, phone, password } = req.body;
        if (!firstname || !lastname || !email || !phone || !password) {
            return res.status(404).json({success, Error: "Invalid credentials" })
        }
        const userExist = await UserScheema.findOne({ email: email });
        if (userExist) {
            return res.status(409).json({success, Error:"Email is already in use"})
        }
        const user = new UserScheema({ firstname, lastname, email, phone, password })
        await user.save();

        const data = {
            user: {
                id: user.id
            }
        }
        success = true
        const authToken = jwt.sign(data, JWT_SECRET);
        res.json({success, authToken })
    } catch (error) {
        res.status(404).send(`Error while registering ${error}`)
    }
})

router.post('/loginuser', async (req, res) => {
    let success = false;
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(404).json({ success, Error: "Invalid credentials" })
        }
        const logedinEmail = await UserScheema.findOne({ email });
        if (!logedinEmail) {
            return res.status(404).json({success, Error: "Please try to login with correct credentials" })
        }
        const matchedpassword = await bcrypt.compare(password, logedinEmail.password);
        if (!matchedpassword) {
            return res.status(404).json({success, Error: "Please try to login with correct credentials" })
        }

        const data = {
            user: {
                id: logedinEmail.id
            }
        }
        success = true
        const authToken = jwt.sign(data, JWT_SECRET);
        res.json({ success, authToken })
    } catch (error) {
        res.status(404).send(`Error while registering ${error}`)
    }
})

router.get('/getuser', fetchuser, async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await UserScheema.findById(userId).select("-password");
        res.json(user)
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router;