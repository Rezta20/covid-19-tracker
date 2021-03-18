import React from "react";

import { Grid, Card, CardContent, Typography } from "@material-ui/core";

import styles from "./Cards.module.css";

const Cards = (props) => {
  console.log(props);

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5"> REAL DATA </Typography>
            <Typography color="textSecondary"> REAL DATA </Typography>
            <Typography variant="body2">
              {" "}
              Number of active cases of COVID-19{" "}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
