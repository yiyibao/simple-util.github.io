const { resolve } = require('path')
module.exports = {
	mode:'production',
	entry: './src/index.js',
	output: {
		path: __dirname,
		filename: './release/bundle.js'
	},
	module:{
		rules:[
			{
				test: /\.js?$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader'
			},
			{
				test: /\.(js|vue)$/,
				loader: 'eslint-loader',
				enforce: 'pre',
				include: [resolve('src')],
				options: {
					// formatter: require('eslint-friendly-formatter'),
					// 不符合Eslint规则时只警告(默认运行出错)
					// emitWarning: !config.dev.showEslintErrorsInOverlay
				}
			}
		]
	}
}
