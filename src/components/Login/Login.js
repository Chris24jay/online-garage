import React, {Component} from 'react';

class Login extends Component {
    constructor(props){
        super(props)

        this.state={
            username: '',
            password:'',
        };
    }

    //methods
    //end of methods
    render(){
        return(
            <div>Login component </div>
        )
    }
}

export default Login;