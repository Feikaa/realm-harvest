require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const User = require("./models/user");
const Data = require("./models/data");
const jwt = require('jsonwebtoken');

const app = express();

app.use(cors({
    origin: "http://localhost:3000",
    headers: ["Content-Type", "token"],
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const uri = process.env.DB_URI;
const SECRET_KEY = process.env.SECRET_KEY;

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

// Save user data
app.put('/api/save/:username', async (req, res) => {
    const username = req.params.username;
    const result = await Data.replaceOne({"username": username }, req.body);
    res.json({ updatedCount: result.modifiedCount });
});

// Get user data
app.get('/api/data/:username', async (req, res) => {
    const username = req.params.username;
    try {
        const result = await Data.findOne({ "username": username });
        if (!result) {
            res.status(404).json({error: "User not found"});
        } else {
            res.status(200).json({result});
        }
    } catch (e) {
        res.status(500).json({error: e.message});
    }
})

// Login user
app.post('/api/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Try to find user with hashed password
    try {
        const user = await User.findOne({ "username": username });
        // User doesnt exist
        if (!user) {
            res.status(404).json({error: "User not found"});
        } else if (user && (await bcrypt.compare(password, user.password))) {
            // User exists, create a token
            const token = jwt.sign(
                { user_id: user._id, username },
                SECRET_KEY,
            );
            res.status(200).json({"user": user.username, "token": token})
        }
    } catch (e) {
        res.status(500).json({ error: e.message});
    }
})

// verify jwt
app.get('/api/validtoken/', async (req, res) => {
    const token = req.headers.token;

    if (!token) {
        return res.status(401).json({error: "Not authorized"});
    }

    try {
        // Verify token is valid
        const user = jwt.verify(token, SECRET_KEY);
        console.log("found")
        return res.status(200).json({
            user: user.username,
            message: "verified",
        });
    } catch (e) {
        console.log("not found")
        return res.status(401).json({error: e.message});
    }
})

// Create new user
app.post('/api/users', async (req, res) => {

    const username = req.body.username;
    //console.log(req.body);
    if (!(req.body.username && req.body.password)) {
        res.status(400).send("All input is required");
    }

    // Check if user already exists
    const oldUser = await User.findOne({ "username": username });

    if (oldUser) {
        return res.status(409).send("User already exists. Please login");
    }

    const hash = await bcrypt.hash(req.body.password, 10);
    const user = new User({
        username: req.body.username,
        password: hash
    });
    const data = new Data({
        username: req.body.username,
    })
    try {
        await user.save();
        await data.save();
        res.status(201).json({"user": user, "data": data});
    } catch (e) {
        res.status(400).json({error: e.message});
    }
})

app.listen(5000, () => {console.log("Server started on port 5000")})