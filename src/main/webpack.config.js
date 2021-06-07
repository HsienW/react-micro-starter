// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CompressionPlugin = require('compression-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// // const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
//
// const path = require('path');
// const baseWebpackConfig = require('../common/webpack/webpack.config.base');
// const {merge} = require('webpack-merge');
//
// const isDev = process.env.NODE_ENV === 'development';
//
// module.exports = merge(baseWebpackConfig, {
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
//                             reloadAll: true,
//                         }
//                     },
//                     'css-loader', {
//                         loader: 'postcss-loader'
//                     }, 'sass-loader'],
//                 include: [path.resolve(__dirname, 'src')],
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
//                 include: [path.resolve(__dirname, 'src')],
//             },
//         ]
//     },
//     resolve: {
//         extensions: [
//             '.js',
//             '.json',
//             '.jsx'
//         ]
//     },
//     devServer: {
//         port: '3000',
//         // compress: true,
//         // hot: true,
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: 'src/index.html',
//             filename: 'index.html',
//         }),
//         new CompressionPlugin(
//             {
//                 test: /\.js(\?.*)?$/i
//             }
//         ),
//         // new MomentLocalesPlugin(),
//         // new BundleAnalyzerPlugin()
//     ],
// });
