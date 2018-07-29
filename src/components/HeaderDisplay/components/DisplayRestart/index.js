import React from 'react';
import PropTypes from 'prop-types';

import { Text, Button } from '../../..';
import HeaderWrapper from '../HeaderWrapper';
import HeaderCompact from '../HeaderCompact';

const Restart = ({ completed, playerChecker, onClick }) => (
  <HeaderWrapper>
    {completed ? (
      <HeaderCompact>
        <Text center color="white" background="advice" space>
          NO WINNER :(
        </Text>
        <Button type="button" onClick={onClick}>
          Try again!
        </Button>
      </HeaderCompact>
    ) : (
      <HeaderCompact>
        <Text center color="white" background="active" space>
          {playerChecker}
          {' '}
WINS!!!
        </Text>
        <Button type="button" onClick={onClick}>
          Restart
        </Button>
      </HeaderCompact>
    )}
  </HeaderWrapper>
);

Restart.defaultProps = {
  playerChecker: '',
};

Restart.propTypes = {
  completed: PropTypes.bool.isRequired,
  playerChecker: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Restart;
