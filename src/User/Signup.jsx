import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Menu from '../Components/Menu';

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
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
            <>
            <Menu/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="container login">
                <h1 className="text">Sign Up Here</h1>
                <form onSubmit={this.onSubmit} className="form">
                    <small className="text-dark p-4">Fill the form to Sign Up </small>
                    <br/>
                    <input 
                    autocomplete="off"
                    type="name"
                    name="name"
                    placeholder="Enter Your Username"
                    value={this.state.username}
                    onChange={this.handleInput}
                    required
                    />
                    <input 
                    autocomplete="off"
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    value={this.state.email}
                    onChange={this.handleInput}
                    required
                    />
                    <input
                    autocomplete="off" 
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleInput}
                    required
                    />
                    <div>
                        <button type="submit" className="btn btn-success mt-4 mr-4"> Submit </button>
                        <button type="reset" className="btn btn-secondary mt-4"> Cancel </button>
                        </div>
                </form>
                <span>Already Have an Account? <Link to="/login-and-sign-up">Log in</Link></span>
            </div>
            </>
        )
    }
}
