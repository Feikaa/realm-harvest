require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require("./models/user");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const uri = process.env.DB_URI;

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error(error);
    }
}

connect();

app.get("/", (req, res) => {
    res.send("Hello World");
})

// Get all users
app.get('/api/users', async (req, res) => {
    //console.log(await mongoose.connection.db.listCollections().toArray());
    try {
        const result = await User.find();
        res.json({"users": result});
    } catch (e) {
        res.status(500).json({error: e.message});
    }
});

// Get user by username
app.get('/api/users/:username', async (req, res) => {
    console.log({
        requestParams: req.params,
        requestQuery: req.query
    });
    try {
        const {username} = req.params;
        const user = await User.findOne({"username": username});
        console.log(user);
        if (!user) {
            res.status(404).json({error: "User not found"});
        } else {
            res.json({user});
        }
    } catch (e) {
        res.status(500).json({error: e.message});
    }
});

// Create new user
app.post('/api/users', async (req, res) => {
    //console.log(req.body);
    const hash = await bcrypt.hash(req.body.password, 10);
    const user = new User({
        username: req.body.username,
        password: hash
    });
    try {
        await user.save();
        res.status(201).json({"user": user});
    } catch (e) {
        res.status(400).json({error: e.message});
    }
})

app.listen(5000, () => {console.log("Server started on port 5000")})