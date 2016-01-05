import React from 'react';
import Router from 'react-router';
import { Route } from 'react-router';

// Loading Asynchronously with React-router
var createAsyncHandler = function(bundle) {
  return React.createClass({
    // was used to give a react class attributes from an outer source, used to share common class attributes
    //mixins: [ AsyncElement ], 
    bundle: bundle,
    preRender: function () {
      return <div>Loading...</div>;
    },
    
    loadedComponent: null,

    load: function () {
      if (this.constructor.loadedComponent)
        return;

      this.bundle(function (component) {
        this.constructor.loadedComponent = component;
        this.forceUpdate();
      }.bind(this));
    },

    componentDidMount: function () {
      setTimeout(this.load, 1000); // feel it good
    },

    render: function () {
      var Component = this.constructor.loadedComponent;
      if (Component) {
        // can't find RouteHandler in the loaded component, so we just grab
        // it here first.
        this.props.activeRoute = this.props.children;
        return <Component {...this.props}/>;
      }
      return this.preRender();
    }
  });
}

export default createAsyncHandler;