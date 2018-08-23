const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = env => {
    const isProductionBuild = !!(env && env.production);

    const config = {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, './dist'),
            publicPath: '/dist/',
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                {
                    enforce: 'pre',
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader: 'eslint-loader'
                },
                {
                    test: /\.css$/,
                    use: [ 'style-loader', 'css-loader' ]
                },
                {
                    test: /\.(png|jpg|gif|svg)$/,
                    loader: 'file-loader'
                }
            ]
        },
        resolve: {
            alias: {
                common: path.resolve(__dirname, 'src/common'),
                store: path.resolve(__dirname, 'src/store'),
                carsModule: path.resolve(__dirname, 'src/modules/cars'),
                weatherWidgetModule: path.resolve(__dirname, 'src/modules/weatherWidget')
            },
            extensions: [ '.js', 'jsx', '.json' ]
        },
        devServer: {
            historyApiFallback: true,
            noInfo: true,
            overlay: true,
            publicPath: '/dist/',
            contentBase: path.join(__dirname, 'public')
        },
        performance: {
            hints: false
        },
        devtool: '#eval-source-map'
    };

    if (isProductionBuild) {
        config.devtool = '#source-map';
        config.plugins = (config.plugins || []).concat([
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: '"production"'
                }
            }),
            new webpack.LoaderOptionsPlugin({
                minimize: true
            }),
            new CleanWebpackPlugin(path.resolve(__dirname, '/dist')),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, './public/index.html'),
                filename: './index.html'
            })
        ]);
        config.optimization = {
            minimize: true
        };
    }
    return config;
};
