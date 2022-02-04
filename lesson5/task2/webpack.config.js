const path = require("path");

module.exports = {
  entry: {
    prfile: "./src/profile/index.js",
    dashboard: "./src/profile/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "./buid"),
  },
};
