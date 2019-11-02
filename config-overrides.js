const path = require('path');
const { override, enableEslintTypescript, addWebpackAlias } = require('customize-cra');

module.exports = override(
  enableEslintTypescript(),
  addWebpackAlias({
    components: path.resolve(__dirname, 'src/components'),
    containers: path.resolve(__dirname, 'src/containers'),
    types: path.resolve(__dirname, 'src/types'),
  }),
);
