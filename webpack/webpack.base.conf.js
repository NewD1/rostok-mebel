const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const PATHS = {
	src: path.join(__dirname, '../src'),
	dist: path.join(__dirname, '../dist'),
	resources: path.join(__dirname, '../src/resources'),
	assets: './assets',
}

module.exports = {
	externals: {
		paths: PATHS,
	},

	entry: {
		main: ['babel-polyfill', PATHS.src],
	},
	output: {
		filename: '[name].[hash].js',
		path: PATHS.dist,
		publicPath: '/', //надо бы разобраться...
	},

	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			src: PATHS.src,
			resources: PATHS.resources,
		},
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.(sass|css|scss)$/,
				use: [
					'style-loader',
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: { sourceMap: true },
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
							config: { path: path.join(__dirname, '/postcss.config.js') },
						},
					},
					'sass-loader',
				],
			},
			{
				test: /\.(png|jpg|gif|svg|eot|ttf)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
				},
			},
		],
	},

	plugins: [
		new HTMLWebpackPlugin({
			template: `${PATHS.src}/index.html`,
		}),
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: `${PATHS.assets}/css/[name].css`,
		}),

		new CopyPlugin({
			patterns: [
				{
					from: `${PATHS.src}/resources`,
					to: `${PATHS.assets}/resources`,
				},
			],
		}),
	],
}
