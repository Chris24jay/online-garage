import React, {Component} from 'react';
import axios from 'axios'
import {connect} from 'react-redux'
import {updateUser} from './../../dux/reducer'
import '../Login/Login.css'


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
        console.log(val)
        this.setState({
            [prop]: val
        })
    }

    // componentDidMount(){
    //     const {id} = this.props;
    //     if(id) {
    //         //boot to other page
    //         this.props.history.push(`/private`)
    //     } else {
    //         //double check sessions
    //         axios.get(`/api/user`)
    //         .then(res => {
    //             //boot to the other page
    //             this.props.updateUser(res.data)
    //             this.props.history.push('/private')
    //         })
    //         .catch(err => {
    //             //don't move
    //         })
    //     }
    // }

    //add an 'if' statement to handle a button press without input
    login = () => {
        const {username, password} = this.state
        axios.post(`/auth/login`, {username, password})
        .then(res => {
            this.props.updateUser(res.data)
            this.props.history.push(`/garage`)
        })
    }

    register = () => {
        const {username, password} = this.state
        console.log('hit')

        axios.post('/auth/register', {username, password})
        .then(res=>{
            console.log(res.data)
            // this.props.updateUser(res.data)
            this.props.history.push(`/garage`)
        })
        .catch(err =>{console.log(err)})
    }

    //end of methods
    render(){
        const {username, password} = this.state;
        return(
            <div class="wrapper" >
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

const mapStateToProps = reduxState => {
    return{
        username: reduxState.id 
    }
}

const dispatchToProps = {
    updateUser
}

export default connect(mapStateToProps, dispatchToProps)(Login);