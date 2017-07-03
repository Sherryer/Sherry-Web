var webpack = require('webpack');

module.exports = {
    entry: {
        boundle: './Mobx/变形金刚/test.jsx',
        learn: './Mobx/learn/test.jsx',
        setName:'./Mobx/todoList/test.jsx',
        myTodoList:'./Mobx/myTodoList/test.jsx',
        ceshi:'./test.js'
    },
    output: {
        path: "./Mobx/compress/",
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?modules'
            }
        ]
    },
    plugins: [

    ]
};
