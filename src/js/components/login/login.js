import React from 'react';

import "../../../css/nav.scss";

var Login = React.createClass({
    render(){
        console.log('login');
        return (
            <div>
                <h4>Welcome to Login</h4>
                <input id='login-input' type='text'/>
                <button id='login-btn'>Enter</button>
            </div>
        );
    }
});
        
export default Login;