import _ from 'lodash';

export const breakpoints = {
  mobile: {
    // held vertical, max-width < 20rem, covers iphone 5/4
    s: 320,
    // held vertical, max-width < 30rem
    // actually it did, and this was 480px, but that wasn't useful
    // covers 6 plus, Nexus 5P, and Galaxy something or other
    m: 411,
    // held horizontal, max-width < 40rem
    l: 640,
  },
  tablet: {
    // 48rem <= min-width, ipad vertical
    m: 768,
    // 64rem <= min-width, ipad horizontal or small laptop
    l: 1024,
  },
  desktop: {
    // 74rem <= min-width, laptop
    s: 1184,
    // 80rem <= min-width, desktop
    m: 1280,
    // 86rem <= min-width, large
    l: 1376,
    // What are you, on a imperial star destroyer?
    // intergalactic
    xl: 1440,
  },
};

export const verticalBreakpoints = {
  mobile: {
    xs: 480, // 4
    s: 568, // 5
    m: 667, // 6
    l: 736, // 6plus
  },
};

const mapBreakpoints = (breakpoints, rule = 'width') =>
  _.map(breakpoints, (breakpoint, size) => ({
    [size]: createBreakpoint(breakpoint, rule),
  }));

const createBreakpoint = (breakpoint, rule = 'width') => {
  const logical = {
    lt: `(max-${rule}: ${breakpoint - 1}px)`,
    lte: `(max-${rule}: ${breakpoint}px)`,
    gte: `(min-${rule}: ${breakpoint}px)`,
    gt: `(min-${rule}: ${breakpoint + 1}px)`,
    toString() {
      return this ? this.gt : '';
    },
  };

  return {
    ...logical,
    breakpoint,
    query: _.mapValues(
      logical,
      (v, k) => (k === 'toString' ? v : `@media all and ${v}`)
    ),
  };
};

export const media = _.assign(
  ..._.map(breakpoints, (breakpoints, platform) => ({
    [platform]: _.assign(
      createBreakpoint(breakpoints.m),
      verticalBreakpoints[platform] != null
        ? {
            v: _.assign(
              createBreakpoint(verticalBreakpoints[platform].m, 'height'),
              ...mapBreakpoints(verticalBreakpoints[platform], 'height')
            ),
          }
        : {},
      ...mapBreakpoints(breakpoints)
    ),
  }))
);

export default media;
