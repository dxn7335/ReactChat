var webpack = require('webpack'); 
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var PATH = {
                app: path.resolve( __dirname, 'src/js/app.js'),
                build: path.resolve( __dirname, 'build')
           }
           console.log(PATH.build);

module.exports = {  
    entry: {
        app: process.env.NODE_ENV === 'production' ? [PATH.app] : ['webpack/hot/dev-server', PATH.app]
    },
    output: {
        path: PATH.build,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            { test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot','babel-loader']},
            { test: /\.scss$/, loader: "style!css!sass" },
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            title: 'React-Chat',
            template: 'underscore-template-loader!./src/index.html',
            inject: 'body'
        })
    ]

};

loaders: [
            {test: /\.js?$/, exclude: /node_modules/, loader: 'babel',  query: {presets:['react', 'es2015']} }
        ]
