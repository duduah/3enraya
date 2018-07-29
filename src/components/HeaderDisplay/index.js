import React from 'react';

import { DisplayRestart, DisplayTurn } from './components';

const HeaderDisplay = ({
  finished, completed, playerChecker, onClick,
}) => {
  if (finished) {
    return <DisplayRestart completed={completed} playerChecker={playerChecker} onClick={onClick} />;
  }
  return <DisplayTurn playerChecker={playerChecker} />;
};

HeaderDisplay.propTypes = {
  ...DisplayRestart.propTypes,
  ...DisplayTurn.propTypes,
};

export default HeaderDisplay;
