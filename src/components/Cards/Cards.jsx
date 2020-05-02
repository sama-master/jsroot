import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import AudiotrackSharpIcon from '@material-ui/icons/AudiotrackSharp';

import styles from './Cards.module.css';

const Cards = ({ id }) => {


  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5" component="h2">
              <code>+ </code><CountUp start={0} end={500} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">
            {id}
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
