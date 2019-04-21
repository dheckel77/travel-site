var path = require('path');

module.exports = {
	entry: "./app/assets/scripts/App.js",
		output: {
			path: path.resolve(__dirname, "./app/temp/scripts"),
			filename: "App.js"
	},
	module: {
		loaders: [
			{
				loader: 'bable-loader',
				query: {
					presets: ['es215']
				},
				test: /\.js$/,
				exclude: /node_modules/
			}
		]
	}
}