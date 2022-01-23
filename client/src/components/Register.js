import React, {Component} from "react"
import '../App.css';

class Register extends Component{
    render(){
        return (
            <form id="Registration-form">
                <label>
                    <p>Full Name</p>
                    <input type="text" />
                </label>
                <label>
                    <p>Email</p>
                    <input type="password" />
                </label>
                <label>
                    <p>Username</p>
                    <input type="password" />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" />
                </label>
                <label>
                    <p>Confirm Password</p>
                    <input type="password" />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        )
    }
}

export default Register;