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
app.use( express.static( `${__dirname}/../build` ) );
app.use(bodyParer.json())
app.use(sessions({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
}))

//endpoints
//auth stuff
//register also creates an orders row for the user
app.post(`/auth/register`, ctrl.register);
app.post(`/auth/login`, ctrl.login);
app.post(`/auth/logout`, ctrl.logout);
app.get(`/api/user`, ctrl.getUser);

//parts display
app.get(`/api/parts`, ctrl.getParts);

//for the garage
//get all the vehicles for the user to choose
//post to user garage
app.get(`/api/vehicles`, ctrl.displayVehicles)
app.post(`/api/vehicles/add`)

//orders
app.post(`/api/orders`)

//server port listening
app.listen(SERVER_PORT, () => console.log(`Firing up at port: ${SERVER_PORT}`))