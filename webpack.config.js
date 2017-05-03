var webpack = require('webpack');

module.exports = {
    entry: {
        boundle: './Mobx/test.jsx'
    },
    output: {
        path: "./Mobx",
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                query: {
                    presets: ['react', 'stage-0', 'es2015']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?modules'
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};