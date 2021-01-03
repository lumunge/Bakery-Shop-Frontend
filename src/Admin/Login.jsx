import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleInput = (e) => {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        });
    }

    onSubmit = (e) => {
        e.preventDefault()
        fetch("/api/authenticate", {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            if(res.status === 200){
                this.history.push('/');
            }else{
                const error = new Error(res.error);
                throw error;
            }
        })
        .catch(err => {
            console.log(err);
            alert('Error Logging In Try Again Later');
        });
    }


    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <h1>Enter Your Details Below To Login</h1>
                    <input 
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    value={this.state.email}
                    onChange={this.handleInput}
                    required
                    />
                    <input 
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleInput}
                    required
                    />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
