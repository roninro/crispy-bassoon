const path = require('path');

const isEnvProd = process.env.NODE_ENV === 'production';

module.exports = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, '../src/components/'),
        '@hooks': path.resolve(__dirname, '../src/hooks/'),
      },
      extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
    },
    // Remove sourcemap files in production
    ...(isEnvProd &&
      stage === `build-javascript` && {
        devtool: false,
      }),
  });
};
