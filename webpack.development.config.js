module.exports = {
	entry: "./src/renderer/index.js",
	output: {
		filename: "./static/bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.js/,
				include: /src/,
				loader: "babel-loader"
			}
		]
	},
	target: "electron"
};
