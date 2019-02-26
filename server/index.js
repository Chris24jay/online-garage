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
    saveUninitialized: true,
}))

//endpoints
app.post(`/auth/register`, ctrl.register);
app.post(`/auth/login`, ctrl.login);
app.post(`/auth/logout`, ctrl.logout);


app.get(`/api/parts`, ctrl.getParts);

//server port listening
app.listen(SERVER_PORT, () => console.log(`Firing up at port: ${SERVER_PORT}`))