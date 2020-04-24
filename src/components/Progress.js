import React from 'react';

import { Typography } from "@material-ui/core";

const Progress = ({ attempt, guessList }) => (
  <div>
    <Typography variant="h2"> Geuss # {attempt}</Typography>
    <ul className="progressBar-history">
      {guessList}
    </ul>
  </div>
);

export default Progress;
