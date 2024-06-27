const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'build'),
    clean: true,
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'public' }],
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js', '.scss'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/, // Регулярное выражение для файлов, которые должны обрабатываться
        exclude: /node_modules/, // Исключить node_modules из обработки
        use: {
          loader: 'babel-loader', // Используем babel-loader
          options: {
            presets: ['@babel/preset-env'], // Применяем пресет @babel/preset-env
          },
        },
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
