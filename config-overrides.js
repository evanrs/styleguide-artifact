const { compose, getBabelLoader } = require('react-app-rewired');
const rewireLodash = require('react-app-rewire-lodash');
const rewireMobX = require('react-app-rewire-mobx');
const rewireSVGR = require('react-app-rewire-svgr');
const rewireStyled = require('react-app-rewire-styled-components');

module.exports = compose(
  rewireLodash,
  rewireMobX,
  (config, env) => rewireSVGR(config, env, { svgo: true }),
  (config, env) => rewireStyled(config, env, { ssr: true }),
  (config, env) => {
    const babelLoader = getBabelLoader(config.module.rules);
    config.module.rules.map(rule => {
      // This ma
      if (
        typeof rule.test !== 'undefined' ||
        typeof rule.oneOf === 'undefined'
      ) {
        return rule;
      }

      rule.oneOf.unshift({
        test: /\.mdx?$/,
        // include: babelLoader.include,
        use: [
          {
            loader: babelLoader.loader,
            options: babelLoader.options,
          },
          '@mdx-js/loader',
        ],
      });

      return rule;
    });

    return config;
  }
);
