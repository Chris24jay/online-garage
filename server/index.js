require('dotenv').config()
const express = require('express');
const massive = require('massive');
const sessions = require('express-session');
const bodyParer = require('body-parser');
const ctrl = require('./controller');

const {SERVER_PORT, DB_CONNECTION, SESSION_SECRET} = process.env

const app = express()
massive(DB_CONNECTION).then(db => {
    app.set('db', db)
})

//middleware
app.use(bodyParer.json())
app.use(sessions({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
}))

//endpoints

//server port listening
app.listen(SERVER_PORT, () => console.log(`Firing up at port: ${SERVER_PORT}`))