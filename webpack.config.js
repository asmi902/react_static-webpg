const path = require('path');

module.exports = {
  entry: './App.js', // Adjust the entry path if needed
  output: {
    path: path.resolve(__dirname, 'public/js'), // Output directory
    filename: 'index.js.pack' // Output filename
  },
  mode: 'development', // Set mode to development
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {} // You can add aliases if needed
  }
};

