// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CompressionPlugin = require('compression-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
// const Dotenv = require('dotenv-webpack');
// const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
// // const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const path = require('path');
// const isDev = process.env.NODE_ENV === 'development';
//
// module.exports = {
//     mode: 'development',
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         libraryTarget: 'commonjs2',
//     },
//     optimization: {
//         // 套件 & common 的 code 拆分成 chunk
//         concatenateModules: false,
//         splitChunks: {
//             maxInitialRequests: 7,
//             // cacheGroups 用途是定義 chunks 所屬的 cache 組
//             cacheGroups: {
//                 // 拆分 react 核心
//                 reactDll: {
//                     name: 'react-dll',
//                     priority: 15, // 權重要大於 vendor & 其他套件
//                     test: (module) => {
//                         return /react|react-dom|prop-types/.test(module.context);
//                     },
//                     chunks: 'initial',
//                 },
//                 // 拆分第三方套件
//                 vendor: {
//                     name: 'vendor',
//                     priority: 1, // 設定優先級, 首先抽出第三方套件
//                     test: /[\\/]node_modules[\\/]/,
//                     chunks: 'initial',
//                     enforce: true,
//                     minSize: 0,
//                     minChunks: 1 // 拆分條件是, 在 src 中最少 import 了1次的都拆
//                 },
//                 // 拆分第三方套件 moment
//                 moment: {
//                     name: 'moment', // 單獨把 moment 拆包出來
//                     priority: 2, // 權重要大於 vendor
//                     test: (module) => {
//                         return /moment/.test(module.context);
//                     },
//                     chunks: 'initial',
//                     minSize: 10, // size 超過 10 byte 的都算
//                     minChunks: 1 // 拆分條件是, 在 src 中最少 import 了1次的都拆
//                 },
//                 // 拆分第三方套件 uuid
//                 uuid: {
//                     name: 'uuid', // 單獨把 uuid 拆包出來
//                     priority: 2, // 權重要大於 vendor
//                     test: (module) => {
//                         return /uuid/.test(module.context);
//                     },
//                     chunks: 'initial',
//                     minChunks: 1 // 拆分條件是, 在 src 中最少 import 了1次的都拆
//                 },
//                 // 拆分 common code 成暫存, 避免重複打包
//                 // common: {
//                 //     chunks: 'initial',
//                 //     name: 'common',
//                 //     minSize: 100, // size 超過 100 byte 的都算
//                 //     minChunks: 1 // 拆分條件是, 在 src 中最少 import 了3次的都拆
//                 // }
//             }
//         },
//         // runtimeChunk 的作用是將包含 chunk 映射關係的列表從 main.js 中抽離出來
//         runtimeChunk: {
//             name: 'manifest'
//         }
//     },
//     resolve: {
//         // 嘗試按順序解析這些後綴名, 如果有多個文件有相同的名字, 但後綴名不同先找 .js
//         extensions: [
//             '.js',
//             '.json',
//             '.jsx'
//         ]
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.(jsx|js)?$/,
//                 include: [path.resolve(__dirname, 'src')],
//                 // 跟 plugins 中的設定對應
//                 use: ['cache-loader', 'babel-loader']
//             },
//             {
//                 test: /\.(sc|c)ss$/,
//                 use: [
//                     'cache-loader',
//                     {
//                         loader: MiniCssExtractPlugin.loader,
//                         options: {
//                             hmr: isDev,
//                             reloadAll: true
//                         }
//                     },
//                     'css-loader', {
//                         loader: 'postcss-loader'
//                     }, 'sass-loader'
//                 ],
//                 include: [path.resolve(__dirname, 'src')]
//             },
//             {
//                 test: /\.(png|jpg|gif|jpeg|webp|svg|eot|ttf|woff|woff2)$/,
//                 use: [
//                     {
//                         loader: 'url-loader',
//                         options: {
//                             limit: 10240, // size 大於 10K 就轉成使用 asset, 小於的話就轉成 64 base
//                             // esModule: false,
//                             name: '[name]_[hash:6].[ext]'
//                         }
//                     }
//                 ],
//                 include: [path.resolve(__dirname, 'src')]
//             }
//         ]
//     },
//     devServer: {
//         port: '3001',
//         compress: true,
//         hot: true,
//         historyApiFallback: true,
//         headers: {
//             'Access-Control-Allow-Origin': '*'
//         }
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: 'src/index.html',
//             filename: 'index.html'
//         }),
//         new MiniCssExtractPlugin({
//             filename: '[name].css'
//         }),
//         new CompressionPlugin({
//             test: /\.js(\?.*)?$/i
//         }),
//         new Dotenv({
//             path: './.env.config.dev',
//             systemvars: true
//         }),
//         new HardSourceWebpackPlugin(),
//         new MomentLocalesPlugin(),
//         new CleanWebpackPlugin()
//         // new BundleAnalyzerPlugin()
//     ]
// };

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
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
        port: '3001',
        compress: true,
        hot: true,
        historyApiFallback: true,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: 'index.html',
        }),
        new CompressionPlugin(
            {
                test: /\.js(\?.*)?$/i
            }
        ),
        new MomentLocalesPlugin(),
        // new BundleAnalyzerPlugin()
    ],
};
