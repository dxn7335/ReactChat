import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import LoginHandler from './components/login.js';
    
let App = React.createClass({
    render() {
        return(
            <div className="nav">
                <Link to="app" onClick={this.gohome}>Home</Link>
                <Link to="login" onClick={this.loginplz}>Login</Link>
                {/* this is the importtant part */}
            </div>
        );
    },
    
    loginplz(event) {
        console.log("why don't you login");
    },
        
    gohome(event) {
        console.log("go home");
    }
});

let routes = (
    <Route name="app" path="/" handler={App}>
        <Route name="login" path="/login" handler={LoginHandler}/>
    </Route>  
);

Router.run(routes, function (Handler) {  
  React.render(<Handler/>, document.body);
});