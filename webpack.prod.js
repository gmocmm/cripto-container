const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const deps = require('./package.json').dependencies;

module.exports = {
  mode: 'production',
  output: {
    publicPath: 'auto'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          plugins: ['@babel/plugin-transform-runtime'],
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new ModuleFederationPlugin({
      name: 'CONTAINER',
      filename: 'remoteEntry_container.js',
      remotes: {
        CRIPTOS: 'CRIPTOS@https://gmo-micro-frontends.s3.us-east-1.amazonaws.com/list/remoteEntry_list.js',
        NEWSCRIPTOS: 'NEWSCRIPTOS@https://gmo-micro-frontends.s3.us-east-1.amazonaws.com/news/remoteEntry_news.js',
        GRAFHCRIPTOS: 'GRAFHCRIPTOS@https://gmo-micro-frontends.s3.us-east-1.amazonaws.com/chart/remoteEntry_graph.js'
      },
      shared: {
        react: { singleton: true, requiredVersion: deps.react, eager: true }
      }
    })
  ],
  optimization: {
    splitChunks: false
  }
};
