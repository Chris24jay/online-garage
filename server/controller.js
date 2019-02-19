
module.exports={
    login: async (req, res) => {
        //get user information @ user_id
        const db = req.app.get('db')
        const{username, password} = req.body
        const {session} =req;
        let user = await db.user.login({user: username})
    },
    
    register: async (req, res) => {
        //create user information in sql.
        //garage_id, cart_id, user_id will auto increment per user registration
        const db = req.app.get('db')
        const{username, password} = req.body
        const{session} = req; 

        let newUser = await db.user.register({username, password})

        newUser = newUser[0]
        res.status(201).send(session.user)
    }
}