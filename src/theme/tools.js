import _ from 'lodash';
import { onProp } from '@evanrs/map-props';

type props = { theme: any };
type resolver = (props: props) => string;
type selector = string | string[] | resolver;

export const resolvesColor = (color: selector, other: ?selector): resolver => {
  color = !color ? null : _.isString(color) ? _.toPath(color) : color;
  other = !other ? null : _.isString(other) ? _.toPath(other) : other;

  return (props: props) => {
    let value = _.isFunction(color)
      ? color(props)
      : _.get(props.theme, color) ||
        _.get(props.theme.colors, color) ||
        _.get(props, color);

    if (value == null && other == null) {
      return color;
    }

    if (value == null) {
      value = _.isFunction(other)
        ? other(props)
        : resolvesColor(other, null)(props);
    }

    if (
      value[0] === '#' ||
      _.startsWith(value, 'rgb') ||
      _.startsWith(value, 'hsl')
    ) {
      return value;
    }

    value =
      resolvesColor(value, null)(props) ||
      (other ? resolvesColor(other, null)(props) : null);

    return value;
  };
};
