var path = require('path');
module.exports = {
  entry: {
    app: ["./src/index.js"]
  },
  output: {
    path: path.join(__dirname, 'src'),
    publicPath: '/src/',
    filename: 'main.js',
  }
};
