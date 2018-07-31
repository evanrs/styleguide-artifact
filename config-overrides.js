const { compose } = require("react-app-rewired");
const rewireLodash = require("react-app-rewire-lodash");
const rewireMobX = require("react-app-rewire-mobx");
const rewireSVGR = require("react-app-rewire-svgr");
const rewireStyled = require("react-app-rewire-styled-components");

module.exports = compose(
  rewireLodash,
  rewireMobX,
  (config, env) => rewireSVGR(config, env, { svgo: true }),
  (config, env) => rewireStyled(config, env, { ssr: true })
);
