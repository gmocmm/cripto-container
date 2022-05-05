const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'production',
  devServer: {
    port: 8080 // Port in each micro frontend in which will running
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
        CRIPTOS: 'CRIPTOS@http://localhost:8081/remoteEntry_list.js',
        NEWSCRIPTOS: 'NEWSCRIPTOS@https://gmo-micro-frontends.s3.us-east-1.amazonaws.com/criptos-news/remoteEntry_news.js',
        MF2: 'MF2@https://microjosegaston.s3.us-west-1.amazonaws.com/MF2/remoteEntry.js'
      },
      shared: ['react']
    })
  ],
  optimization: {
    splitChunks: false
  }
};
