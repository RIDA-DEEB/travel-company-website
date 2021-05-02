var HtmlWebpackPlugin = require("html-webpack-plugin");

var MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");




module.exports = {
  entry: './src/js/index.js',


output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/bundle.js'
  },
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    port: 4000,
    writeToDisk: true,
    stats: 'errors-only',
    open: true
},

  module: {
    rules: [
        {
            test: /\.html$/i,
            loader: 'html-loader',
          },

      {
        test: /\.(sass|css|scss)$/,
        use: [
            // Creates `style` nodes from JS strings
            {
                loader: MiniCssExtractPlugin.loader,
                options: {
                    publicPath: '../'
                }
            },
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
        ],
    },
      {
        test: /\.(svg|eot|woff|woff2|ttf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: '[name].[ext]',
              outputPath: "fonts",
              esModule: false,
            }
          }
        ]
      },

      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: '[name].[ext]',
              outputPath: "images",
            }
          }


        ]

      },
      {
        test: require.resolve('jquery'),
        loader: 'expose-loader',
        options: {
          exposes: ['$', 'jQuery'],
        }
      },

    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "sign-up.html",
      template: "./src/sign-up.html",
    }),
    new HtmlWebpackPlugin({
      filename: "egypt.html",
      template: "./src/egypt.html",
    }),
    new HtmlWebpackPlugin({
      filename: "istanbul.html",
      template: "./src/istanbul.html",
    }),
    new MiniCssExtractPlugin({
      filename: "css/style.css",
    }),
]
};