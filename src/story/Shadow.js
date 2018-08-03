import _ from 'lodash';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, {
  css,
  injectGlobal,
  ThemeProvider,
  withTheme,
} from 'styled-components';

import ShadowDOM from 'react-shadow';

@withTheme
export default class Shadow extends React.Component {
  inject = shadow => {
    if (shadow !== this.shadow) {
      this.shadow = shadow;

      if (shadow) {
        injectGlobal`
          :root, body {
            font-size: 20px;
          }
        `;
      }
    }
  };

  render() {
    const { theme, children } = this.props;
    return (
      <ShadowDOM>
        <div ref={this.inject}>
          <ThemeProvider theme={theme} children={children} />
        </div>
      </ShadowDOM>
    );
  }
}
