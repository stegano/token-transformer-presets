const path = require("path");

module.exports = {
  mode: "production",
  target: "node",
  entry: {
    "json-formatter": "./src/presets/json-formatter/index.ts",
    "jwt-viewer": "./src/presets/jwt-viewer/index.ts",
    "zeplin-css": "./src/presets/zeplin-css/index.ts",
    "zeplin-scss": "./src/presets/zeplin-scss/index.ts",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "build"),
    libraryTarget: "commonjs",
  },
  module: {
    rules: [
      {
        test: /\.hbs$/i,
        use: "raw-loader",
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: path.resolve(__dirname, "tsconfig.build.json"),
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  externals: {
    "@stegano/token-transforemr": "@stegano/token-transforemr",
  },
};
