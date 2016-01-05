import React from 'react';

import "./home.scss";

var Home = React.createClass({

	getInitialState: function(){

        // This is called before our render function. The object that is 
        // returned is assigned to this.state, so we can use it later.

        return { count: 0 };
    },

    componentDidMount: function(){
    	// componentDidMount is called by react when the component 
        // has been rendered on the page. We can set the interval here:
    	this.timer = setInterval( this.tick, 500 );
    },

    tick: function(){
    	var elapsed = this.state.count - 1;
    	this.setState({count: elapsed});
    },

    componentWillUnmount: function(){

        // This method is called immediately before the component is removed
        // from the page and destroyed. We can clear the interval here:

        clearInterval(this.timer);
    },

    render: function(){
        console.log('Home');
        var count = this.state.count;
        return (
            <div>
                <h4>{count}</h4>
            </div>
        );
    },

});
        
export default Home;