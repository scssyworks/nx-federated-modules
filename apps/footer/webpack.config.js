const nrwlConfig = require('@nrwl/react/plugins/webpack');
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('../../package.json').dependencies;

module.exports = (config) => {
  nrwlConfig(config);
  config.context = process.cwd();
  config.optimization.runtimeChunk = false;

  return {
    ...config,
    plugins: [
      ...config.plugins,
      new ModuleFederationPlugin({
        name: 'FooterApp',
        filename: 'remoteEntry.js',
        exposes: {
          './Footer': './apps/footer/src/app/app.tsx',
        },
        shared: {
          ...deps,
          react: {
            singleton: true,
            eager: true,
            requiredVersion: deps.react,
          },
          'react-dom': {
            singleton: true,
            eager: true,
            requiredVersion: deps['react-dom'],
          },
          'react-router-dom': {
            singleton: true,
            eager: true,
            requiredVersion: deps['react-router-dom'],
          },
        },
      }),
    ],
  };
};
