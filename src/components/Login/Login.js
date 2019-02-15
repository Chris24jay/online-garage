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
    handleChange(prop,val){
        this.setState({
            [prop]: val
        })
    }

    //end of methods
    render(){
        const {username, password} = this.state;
        return(
            <div>
                <input placeholder='Username' value={username} onChange={e => this.handleChange('username', e.target.value)} />
                <input placeholder='Password' type='password' value={password} onChange={e => this.handleChange('password', e.target.value)} />
                <button>Login</button>
                <button>Register</button>                 
            </div>
        )
    }
}

export default Login;