var webpack = require('webpack'); 
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {  
    entry: [
      'webpack/hot/only-dev-server',
      "./src/js/app.js"
    ],
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            { test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot','babel-loader']},
            { test: /\.scss$/, loader: "style!css!sass" }
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            title: 'ReactChat',
            template: 'src/index.html'
        })
    ]

};