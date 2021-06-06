const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CompressionPlugin = require('compression-webpack-plugin');
// const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const packageName = require('./package.json').name;

module.exports = {
    output: {
        library: `${packageName}-[name]`,
        libraryTarget: 'umd',
        jsonpFunction: `webpackJsonp_${packageName}`,
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(less)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|mp4|wmv)$/,
                loader: 'file-loader'
            },
        ]
    },
    resolve: {
        extensions: [
            '.js',
            '.json',
            '.jsx'
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    devServer: {
        port: '3002',
        // compress: true,
        // hot: true,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: 'index.html',
        }),
        // new CompressionPlugin(
        //     {
        //         test: /\.js(\?.*)?$/i
        //     }
        // ),
        // new MomentLocalesPlugin(),
        // new BundleAnalyzerPlugin()
    ],
};
