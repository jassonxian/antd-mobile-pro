const { override, fixBabelImports, addLessLoader, addWebpackPlugin } = require('customize-cra');
const theme = require('./antd-theme');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: theme
    }
  }),
);
