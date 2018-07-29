import React from 'react';
import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';

import Header from '../Header';
import Body from '../Body';

// eslint-disable-next-line
injectGlobal`
  ${normalize()};
`;

const Template = ({ children, logo }) => (
  <div>
    <Header logo={logo} />
    <Body>
      {children}
    </Body>
  </div>
);

Template.propTypes = {
  ...Body.propTypes,
  ...Header.propTypes,
};

export default Template;
