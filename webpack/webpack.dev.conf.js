const webpack = require('webpack')
const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const devWebpackConfig = merge(baseWebpackConfig, {
	mode: 'development',

	devServer: {
		contentBase: baseWebpackConfig.externals.paths.dist,
		historyApiFallback: true,
		hot: true,
		port: 3001,

		overlay: {
			warnings: false,
			errors: true,
		},
	},

	devtool: 'inline-source-map',

	plugins: [
		new webpack.SourceMapDevToolPlugin({
			filename: '[file].map',
		}),
	],
})

module.exports = new Promise(resolve => {
	resolve(devWebpackConfig)
})
