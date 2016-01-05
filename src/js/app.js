import React from 'react';
import ReactDom from 'react-dom';
import Router from 'react-router';
import { IndexRoute, Link, IndexLink, Route } from 'react-router';

import createAsyncHandler from './utils/createAsyncHandler.js';

import Home from './components/home/home.js';
//import LoginHandler from './components/login.js';

let App = React.createClass({
    loginplz: function(event) {
        console.log("why don't you login");
    },
        
    gohome: function(event) {
        console.log("go home");
    },

    render: function() {
        return(
            <div>
                <div className="nav">
                    <IndexLink to="/" onClick={this.gohome}>Home</IndexLink>
                    <Link to="/login" onClick={this.loginplz}>Login</Link>
                    {/* this is the important part */}
                </div>
                {/* replacement of RouteHandler (now populates this.props.children based on activeroute */}
                {this.props.children} 
            </div>
        );
    },
});

let routes = (
    <Route path="/" component={App}>
        <Route path="/login" getComponent={(location, callback) => {
            require.ensure([], function(require){
                var login = require('./components/login/login.js');
                callback(null, login);
            });
        }}/>
        <IndexRoute component={Home}/>
    </Route>  
);

ReactDom.render(<Router routes={routes}/>, document.getElementById('react'));