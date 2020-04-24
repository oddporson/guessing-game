import React from 'react';

import { Grid, Typography, Paper, Divider } from '@material-ui/core';

import { generateRandomNumber } from "./util";

import Form from "./components/Form";
import Progress from "./components/Progress";

class App extends React.Component {

  state = {
    generatedNumber: generateRandomNumber(),
    guess: undefined,
    allGuess: [],
    attempt: 0,
  }

  updateAppState = (guess) => {

    const absDiff = Math.abs(guess - this.state.generatedNumber);

    this.setState(prevState => ({
      guess,
      allGuesses: [ ...prevState.allGuesses, { guess } ],
      attempt: prevState.attempt +1
    }))
  }

  render() {

    const { allGuesses, attempt } = this.state; 

    const guessList = allGuesses.map((item, index) => (
      <li key={index}>
        <span>{item.guess}</span>
      </li>
    ))

    return (
      <Grid container style={{ height: '100vh' }} justify="center" alignitems="center">
        <Grid item xs={3}>
          <Paper style={{padding: '50px' }} elevation={6}>
            <Typography align="center" variant="h2" gutterBottom>HOT or COLD</Typography>
            <Divider style={{ margin: '20px 0' }} />
            <Form returnGuessToApp={guess => this.updateAppState(guess)} />
            <Progress attempt={attempt} guessList={guessList}></Progress>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default App;
