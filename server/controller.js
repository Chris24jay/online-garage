const brcrypt = require('bcryptjs')

module.exports={
    //auth stuff
    login: async (req, res) => {
        //get user information @ user_id
        const db = req.app.get('db')
        const{username, password} = req.body
        const {session} =req;
        let user = await db.login({user: username})
        user = user[0];

        if(!user){
            return res.sendStatus(418)
        }
        const foundUser = brcrypt.compareSync(password, user.password)
        if(foundUser){
            delete user.password
            session.user = user; 

            let newOrder = await db.orders.selectOrderId({user_id: user.user_id, checkout: false})
            session.user ={...user, newOrder}            

            console.log('this is the session.user:',session.user)
            res.status(200).send(session.user);
        } else {
            res.status(401).send('no match')
        }
    },
    
    register: async (req, res) => {

        
        const {username, password} = req.body
        const db = req.app.get('db')
        const{session} = req; 
        const salt = brcrypt.genSaltSync(10);
        const hash = brcrypt.hashSync(password, salt);
        
        try{
            let newUser = await db.register(
                {
                    username: username, 
                    password: hash, 
                }
            )
            
            newUser = newUser[0]

            let newOrder = await db.orders.createOrders(
                {
                    user_id: newUser.user_id,
                    checkout: false
                }
            )
            session.user = {...newUser, newOrder};
            res.status(201).send(session.user)

        }
        catch(error){console.log(error)}
    },

    logout: (req,res) => {
        req.session.destroy()
        res.sendStatus(200)
    },

    getUser: (req,res) => {
        const{user} =req.session
        
            
        if(user){
            res.status(200).send(user);
        } else {
            res.sendStatus(401);
        }
    }, 

    //parts display
    getParts: (req, res) => {
        const db = req.app.get('db')

        db.partsDisplay().then(products => res.status(200).send(products))
        .catch(err => {res.status(500).send('No go, something went wrong'); console.log(err)})
    },

    //for the garage
    displayVehicles: (req, res) => {
        const db = req.app.get('db')

        db.garage.getAllVehicles().then(vehicles => res.status(200).send(vehicles))
        .catch(err => {res.status(500).send(err)})
    },

    addToGarge: (req,res) => {
        
        db.garage.vehicleReg().then()
        .catch(err => {res.status(500).send('error')})
    },

    //orders stuff
    addToOrder: (req,res) => {
        const {id, price} = req.body
        console.log(req.body)
        const db = req.app.get('db')
        const {newOrder} = req.session.user

        db.createCart({
            order_id: newOrder.order_id,
            part_id: id,
            quantity: 1,
            total_price: price, 
        })
        .then(res.status(200))
        .catch(err => {res.status(500).send(err)})
    }
}