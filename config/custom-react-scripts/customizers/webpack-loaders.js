const styleLoader = require('../webpack-config/style-loader');
const graphqlLoaderConfig = require('../webpack-config/graphql-loader');
const graphqlLoader = require.resolve('graphql-tag/loader');

module.exports = {
  CSS: {
    default: true,
    get: styleLoader(undefined, /\.css$/, /\.module\.css$/),
  },
  GRAPHQL: {
    get: graphqlLoaderConfig(graphqlLoader, /\.(graphql|gql)$/, /node_modules/),
  },
};
