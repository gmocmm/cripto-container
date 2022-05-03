const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const deps = require('./package.json').dependencies;

module.exports = {
  mode: 'development',
  devServer: {
    port: 8081 // Port in each micro frontend in which will running
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
      filename: 'remoteEntry.js',
      remotes: {
        MF1: 'CRIPTOS@https://gmo-micro-frontends.s3.amazonaws.com/cripto-list/dist/v2/remoteEntry.js',
        MF2: 'MF2@https://microjosegaston.s3.us-west-1.amazonaws.com/MF2/remoteEntry.js',
        MF3: 'NEWSCRIPTOS@https://jejeje124.herokuapp.com/remoteEntry.js'
      },
      shared: [{
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react
        }
      }]
    })
  ]
};
