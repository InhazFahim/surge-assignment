import React, {Component} from "react";
import '../App.css';

class Login extends Component{
    render(){
        return( 
            <form id="login-form">
                <label>
                    <p>Username</p>
                    <input type="text" />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        )
    }
}

export default Login;