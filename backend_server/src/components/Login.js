import React, {Component} from 'react';

import cors from 'cors';
import fetch from 'node-fetch';
import axios from '../api/axios';

class Login extends Component {
    
    state = {  };
    render() { 
        return (
            <div className='auth-wrapper'>
                <div className='auth-inner'>
                    <form onSubmit={this.handleSubmit}>
                            <h3>Login</h3>

                            <div className='form-group'>
                                <label>Email</label>
                                <input type="email" className="formm-control" placeholder='Email'
                                onChange={e=>this.email = e.target.value}/>
                            </div>

                            <div className='form-group'>
                                <label>Password</label>
                                <input type="password" className="formm-control" placeholder='Password'
                                onChange={e=>this.password = e.target.value}/>
                            </div>

                            <button className='btn btn-primary btn-block'>Login</button>
                    </form>
                </div>
            </div>
          );
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            email: this.email,
            password: this.password,
        };

        console.log(data);
        axios.post('/login',data).then
            (res => {
                localStorage.setItem('token', res.data.token);
            }).catch(
            err => {
                console.log(err);
            }
        )
    };
}

 //eve.holt@reqres.in   'https://reqres.in/api/login'
export default Login;