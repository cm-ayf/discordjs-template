const { dependencies } = require("./package.json");
/**
 * @type {import('@swc/core/spack').BundleOptions}
 */
module.exports = {
  entry: "src/main.ts",
  module: {},
  output: {
    name: "main.js",
    path: "dist",
  },
  target: "node",
  externalModules: Object.keys(dependencies),
  options: { swcrc: true, minify: true },
};
