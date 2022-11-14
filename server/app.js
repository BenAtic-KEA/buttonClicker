import dotenv from 'dotenv'
dotenv.config();

import express, { json } from "express";
const app = express();
app.use(express.json());

import helmet from "helmet";
app.use(helmet());

import path from "path"
app.use(express.static(path.resolve("../client/dist")));

import cors from "cors";
app.use(cors());

import { rateLimit } from 'express-rate-limit';

import session from 'express-session';

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

const routeLimiter = rateLimit({
    windowMs:10*60*1000,
    max:80,
    standardHeaders: true,
    legacyHeaders: false,
});

function guardMiddleware(req,res,next){

}





app.get("*", (req,res) => {
    res.send(`<h1>404</h1> <br> <br> <h3> Could not find the page`)
});

const PORT = process.env || 8080
app.listen(PORT, ()=> console.log("server is running on port",PORT))