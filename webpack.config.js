var path = require('path');
var webpack = require('webpack');
var args = require('node-args');

var config = {
	entry : './app/main.js',
	output : {
		path : path.join(__dirname,'dist'),
		publicPath : '/dist/',
		filename : 'build.js'
	},
	plugins : [],
	module : {
		loaders : [
			{
				test : /\.js$/,
				loader : "babel-loader"
			},{
				test : /\.jsx$/,
				exclude: /node_modules/,
				loader : "babel-loader"
			},{
				test : /\.less$/,
				loader : "style-loader!css-loader!less-loader"
			},{ 
				test: /\.css$/, 
				loader: "style-loader!css-loader" 
			},{ 
				test: /\.png$/, 
				loader: "url-loader" 
			},{
				test : /\.json$/,
				loader : "json-loader"
			}
		]
	}
}

if(args.minify){
	config.plugins = [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
		        warnings: false
		    }
		}),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.DefinePlugin({
		    'process.env.NODE_ENV': '"development"'
		}),
		new webpack.HotModuleReplacementPlugin()
	];
}

module.exports  = config;