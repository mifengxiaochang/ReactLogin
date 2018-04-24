var webpack = require('webpack');
var React = require("react");
var path = require('path');
var DEV = path.resolve(__dirname,"dev")
var outputPath = path.resolve(__dirname,"output");
/*//css文件提取器需要的模块
var ExtractTextPlugin=require('extract-text-webpack-plugin');

//postcss-loader 需要的配置项
var precss       = require('precss');
var autoprefixer = require('autoprefixer');*/
var config = {
  entry: DEV+'/log.jsx',

  output: {
    path:outputPath,
    publicPath:"output/",//用于表明图片等资源引用的路径
    filename:"login.js"
  },
  module: {
    loaders: [
      {
      	include:DEV,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
      	loader: 'style-loader!css-loader'//需要用npm下载XX-loader
  	  },
      {
      	test: /.(png|jpg)$/,
      	loader: "url-loader?limit=8192&name=images/[hash:8].[name].[ext]"
      },
       {
          test: /\.less$/,
          loader: "style-loader!css-loader!less-loader"
        }
    ]
  }
};

module.exports = config;
