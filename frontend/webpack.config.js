const VueLoaderPlugin = require("vue-loader/lib/plugin");
const path = require("path");

module.exports = {
    mode: "development",
	entry: "./src/main.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
	},
	devServer: {
		static: "./public",
		port: 8080,
	},
	module: {
		rules: [
			{ test: /\.vue$/, loader: "vue-loader" },
			{ test: /\.css$/, use: ["style-loader", "css-loader"] },
		],
	},
	plugins: [new VueLoaderPlugin()],
};
