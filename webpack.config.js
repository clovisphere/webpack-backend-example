const path = require('path');
const ext = require('webpack-node-externals');
const name = 'bundled-app'

module.exports = {
    mode: 'development',
    target: 'node',
    node: { __dirname: true },
    entry: path.resolve('./src/index.js'),
    output: {
        path: path.resolve(__dirname, './build'),
        pathinfo: true,
        publicPath: '/build/',
        filename: name + '.js'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            include: path.resolve('./src'),
            loader: 'babel-loader',
            query: {
                presets: ['env']
            }
        }]
    },
    externals: [ext()]
}
