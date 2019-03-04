require('dotenv').config()
const express = require('express');
const massive = require('massive');
const sessions = require('express-session');
const bodyParer = require('body-parser');
const ctrl = require('./controller');
const stripe = require("stripe")(process.env.STRIPEKEY);

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
app.post(`/api/orders`, ctrl.addToOrder)
app.get(`/api/orders/usercart`, ctrl.getUserCart)
app.delete(`/api/orders/usercart/delete/:id`, ctrl.deleteCartItem) 
app.put(`/api/orders/usercart/update`, ctrl.updateCart)
app.post('/api/payment', function(req, res, next){
    //convert amount to pennies
    console.log(req.body)
    const amountArray = req.body.amount.toString().split('');
    const pennies = [];
    for (var i = 0; i < amountArray.length; i++) {
      if(amountArray[i] === ".") {
        if (typeof amountArray[i + 1] === "string") {
          pennies.push(amountArray[i + 1]);
        } else {
          pennies.push("0");
        }
        if (typeof amountArray[i + 2] === "string") {
          pennies.push(amountArray[i + 2]);
        } else {
          pennies.push("0");
        }
          break;
      } else {
          pennies.push(amountArray[i])
      }
    }
    const convertedAmt = parseInt(pennies.join(''));
    console.log({convertedAmt})
    const charge = stripe.charges.create({
    amount: convertedAmt, // amount in cents, again
    currency: 'usd',
    source: req.body.token.id,
    description: 'Test charge-Mistreee Official'
   }, function(err, charge) {
      if (err) {
        console.log(err)
        return res.sendStatus(500)
      }
      return res.sendStatus(200);
    // if (err && err.type === 'StripeCardError') {
    //   // The card has been declined
    // }
   });
   });


//server port listening
app.listen(SERVER_PORT, () => console.log(`Firing up at port: ${SERVER_PORT}`))