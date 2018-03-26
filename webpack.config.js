const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
	context: __dirname,
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, "public"),
		filename: 'bundle.js',
		publicPath: '/public/'
	},
	devServer: {
		contentBase: path.join(__dirname, "public"),
		stats: "errors-only",
		overlay:true,
		open: true,
		hot: true,
		publicPath: '/public/',
		historyApiFallback: true
	},
	devtool: process.env.NODE_ENV === 'development' ? 'cheap-eval-source-map' : false,
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		rules: [
			{
			  test: /\.(html)$/,
			  use: {
			    loader: 'html-loader',
			    options: {
			      attrs: [':data-src']
			    }
			  }
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader'
				]
			},
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				use: [
					"babel-loader",
					"eslint-loader"
				]
			},
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
			}
		]
	}

}




module.exports = config;