
const htmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

const path = require('path')



module.exports = {
	entry: "./src/index.ts",
	output: {
		filename:"main.js"
	},
	resolve: {
		extensions:['.ts','.js','.tsx']
	},	
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/

			}
		]
	},
	devtool: process.env.NODE_ENV === 'production' ? false : 'inline-source-map',
	devServer: {
		contentBase: './dist',
		stats: 'errors-only',
		compress: false,
		host: 'localhost',
		port:8089
	},
	plugins: [
		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatterns:['./dist']
		}),
		
		new htmlWebpackPlugin({
			 template:'./src/template/index.html',    //指定模版页面生成内存中的hmtl
             filename:'index.html'   //指定生成的页面名称
		})
	]
	
}