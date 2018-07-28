import React from 'react';
import PropTypes from 'prop-types';
import { Text, Button } from '../..';

const Restart = ({ completed, playerChecker, onClick }) => (
  <div>
    {completed ? (
      <div>
        <Text center color="white" background="advice" space>
          NO WINNERS THIS TIME :(
        </Text>
        <Button type="button" onClick={onClick}>
          Try again!
        </Button>
      </div>
    ) : (
      <div>
        <Text center color="white" background="active" space>
          {playerChecker}
          {' '}
WINS!!!
        </Text>
        <Button type="button" onClick={onClick}>
          Restart
        </Button>
      </div>
    )}
  </div>
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
