const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.output.publicPath = "auto";
webpackConfig.output.uniqueName = "profile";
      webpackConfig.output.chunkLoadingGlobal = "profileChunkLoader";

      webpackConfig.optimization.runtimeChunk = false;

      webpackConfig.plugins.push(
        new ModuleFederationPlugin({
          name: "profile",
          filename: "remoteEntry.js",
library: { type: "var", name: "profile" },
          exposes: {
            "./App": "./src/App",
          },
shared: {
            react: { singleton: true, requiredVersion: false },
            "react-dom": { singleton: true, requiredVersion: false },
            "react-router-dom": { singleton: true, requiredVersion: false },
          },
        })
      );

      return webpackConfig;
    },
  },
};