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

    login = () => {
        const {username, password} = this.state
        axios.post(`/auth/login`, {username, password})
        .then(res => {
            this.props.history.push(`/garage`)
        })
    }

    register = () => {
        const {username, password} = this.state
        axios.post(`/auth/register`, {username, password})
        .then(res=>{
            this.props.history.push(`/garage`)
        })
    }

    //end of methods
    render(){
        const {username, password} = this.state;
        return(
            <div>
                <input 
                    placeholder='Username' 
                    value={username} 
                    onChange={e => this.handleChange('username', e.target.value)} 
                />

                <input 
                    placeholder='Password' 
                    type='password' 
                    value={password} 
                    onChange={e => this.handleChange('password', e.target.value)} 
                />

                <button onClick={this.login} >Login</button>
                <button onClick={this.register} >Register</button>                 
            </div>
        )
    }
}

export default Login;