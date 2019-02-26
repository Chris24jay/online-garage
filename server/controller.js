const brcrypt = require('bcryptjs')

module.exports={
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
            res.status(200).send(session.user);
        } else {
            res.status(401).send('no match')
        }
    },
    
    register: async (req, res) => {
        //create user information in sql.
        //garage_id, cart_id, user_id will auto increment per user registration
        console.log(req.body)
        const {username, password} = req.body
        const db = req.app.get('db')
        const{session} = req; 
        const salt = brcrypt.genSaltSync(10);
        const hash = brcrypt.hashSync(password, salt);
        
        try{
            let newUser = await db.register({username: username, password: hash})
            newUser = newUser[0]
    
            session.user = {...newUser};
            res.status(201).send(session.user)

        }
        catch(error){console.log(error)}
    },

    logout: (req,res) => {
        req.session.destroy()
        res.sendStatus(200)
    }, 

    getParts: (req, res) => {
        const db = req.app.get('db')

        db.partsDisplay().then(products => res.status(200).send(products))
        .catch(err => {res.status(500).send('No go, something went wrong'); console.log(err)})
    }
}