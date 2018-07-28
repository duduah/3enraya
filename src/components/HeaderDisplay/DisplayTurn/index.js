import React from 'react';
import PropTypes from 'prop-types';

import { Text } from '../..';

const DisplayTurn = ({ playerChecker }) => (
  <div>
    <Text center space>
      Turn for player:
    </Text>
    <Text center color="white" background={playerChecker} space>
      {playerChecker}
    </Text>
  </div>
);

DisplayTurn.propTypes = {
  playerChecker: PropTypes.string.isRequired,
};

export default DisplayTurn;
