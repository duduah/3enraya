import React from 'react';
import PropTypes from 'prop-types';

import { Text } from '../../..';
import HeaderWrapper from '../HeaderWrapper';
import HeaderCompact from '../HeaderCompact';

const DisplayTurn = ({ playerChecker }) => (
  <HeaderWrapper>
    <HeaderCompact>
      <Text center space>
        Turn for player:
      </Text>
      <Text center color="white" background={playerChecker} space>
        {playerChecker}
      </Text>
    </HeaderCompact>
  </HeaderWrapper>
);

DisplayTurn.propTypes = {
  playerChecker: PropTypes.string.isRequired,
};

export default DisplayTurn;
