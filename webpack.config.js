// path
var path = require('path');
// why need webpack
var webpack = require('webpack')

//
module.exports = {
  // entry point main.js
  entry: './src/main.js',
  output: {
    // output to /dist dir
    path: path.resolve(__dirname, './dist'),
    // /dist also a public path
    publicPath: '/dist/',
    // the file is called build.js
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        // loader 1: vue-loader
        test: /\.vue$/,
        // vue, loader
        loader: 'vue-loader',
        options: {
          // ok, inside loader we have more loaders
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            // backward, style -> css -> sass
            'scss': 'vue-style-loader!css-loader!sass-loader',
            // backward, style -> css -> sass ? syntax
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
          // other vue-loader options go here
        }
      },
      {
        // babel loader
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        // file loader, for img
        // options, name.ext?hash
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  //
  resolve: {
    alias: {
      // it is a ES module, don't know much
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  // dev server, history api fallback
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  // no hint
  performance: {
    hints: false
  },
  // source map vs eval source map
  devtool: '#eval-source-map'
}

// porduction
if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  // jam define plugin, uglify, and loader together.
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
