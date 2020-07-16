const webpack = require("webpack");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const inProduction = process.env.NODE_ENV === "production";

module.exports = {
	entry: ["@babel/polyfill", "./src/index.js"],
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				options: {
					cacheDirectory: true,
					plugins: ["react-hot-loader/babel"],
				},
			},
		],
	},
	devServer: {
		publicPath: path.join(__dirname, "/dist/bundle.js"),
		port: 9090,
		hot: true,
		writeToDisk: true,
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: "React App",
			template: "src/template/index.html",
		}),
	],
	watch: true,
	optimization: {
		minimize: inProduction,
	},
};

if (inProduction) {
	module.exports.optimization.minimize = true;
	module.exports.watch = false;
}
