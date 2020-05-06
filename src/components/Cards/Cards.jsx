import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import AudiotrackSharpIcon from '@material-ui/icons/AudiotrackSharp';

import styles from './Cards.module.css';

const Cards = (props) => {

// if(!accountBalance) {
//   return 'Loading . . .';
// }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} md={6} lg={3} component={Card} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5" component="h2">
              <code>+ </code><CountUp start={0} end={ 54546  } duration={2.75} />
            </Typography>
            <Typography color="textSecondary">
      
            </Typography>
            <Typography variant="body2" component="p">
              My awesome card
            </Typography>
          </CardContent>
          <AudiotrackSharpIcon/>
        </Grid>
        <Grid item xs={12} md={6} lg={3} component={Card} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5" component="h2">
              <code>+ </code><CountUp start={0} end={ 4345 } duration={2.75} />
            </Typography>
            <Typography color="textSecondary">
            { 564654 } 
            </Typography>
            <Typography variant="body2" component="p">
              My awesome card
            </Typography>
          </CardContent>
          <AudiotrackSharpIcon className="App-logo"/>
        </Grid>
        <Grid item xs={12} md={6} lg={3} component={Card} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5" component="h2">
              <code>+ </code><CountUp start={0} end={ 45435 } duration={2.75} />
            </Typography>
            <Typography color="textSecondary">
            { 3453 } 
            </Typography>
            <Typography variant="body2" component="p">
              My awesome card
            </Typography>
          </CardContent>
          <AudiotrackSharpIcon/>
        </Grid>
      </Grid>
    </div>
  );
};
export default Cards;
