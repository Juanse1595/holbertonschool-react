const path = require('path');

module.exports = {
	devServer: {
		static: {
			directory: path.join(__dirname, 'public')
		},
		compress: true,
		port: 8564,
	},
	mode: 'development',
	entry: {
		body: './modules/body/body.js',
		header: './modules/header/header.js',
		footer: './modules/footer/footer.js',
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: '[name].bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				],
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
					'file-loader',
					{
						loader: 'image-webpack-loader',
						options: {
							bypassOnDebug: true,
							disable: true,
						},
					},
				],
			},
		]
	}
};
