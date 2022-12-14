import dotenv from 'dotenv'
dotenv.config();


import express from "express";
const app = express();
app.use(express.json());

import helmet from "helmet";
app.use(helmet());

import bodyParser from 'body-parser'
app.use(bodyParser.json())


import session from 'express-session';
const store = new session.MemoryStore();
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
    store: store
}));

import path from "path"
app.use(express.static(path.resolve("../client/dist")));

import cors from "cors";
app.use(cors({ credentials: true, origin: true }));

import accountRouter from './routers/accountRouter.js'
app.use(accountRouter);

app.get("/api/currentUser", (req,res) => {
    res.json({user: req.session.user?.username, isAuthenticated: req.session.authenticated})
})

import gameRouter from './routers/gameRouter.js'
app.use(gameRouter)

app.get("*", (req,res) => {
    //res.send(`<h1>404</h1> <br> <br> <h3> Could not find the page`)
    res.sendFile(path.resolve("../client/dist/index.html"))
});

const PORT = process.env.PORT || 8080
app.listen(PORT, ()=> console.log("server is running on port",PORT))