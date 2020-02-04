const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'inline-source-map',
    devServer: {
        port: 3000,
        public: 'localhost:3000',
        contentBase: [path.join(__dirname, './test'), path.join(__dirname, './dist')],
        stats: {
            all: false,
            builtAt: true,
            timings: true,
            version: false,
            modules: false,
            maxModules: 0,
            assets: false,
            errors: true,
            warnings: true,
            moduleTrace: true,
            errorDetails: true
        },
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
};
