import React, { Component } from "react";

import Details from '../store/index';

import { Grid, Card, CardContent, Typography } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 1
  },
  card: {
    width: 180,
    height: 200,
    background: "#ED0000"
  },
  font: {
    color: "#eeeeee"
  }
});

class Subs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      thumbUrl: "",
    };
  }

  _onReady(event) {
    event.target.pauseVideo();
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        { Details.id.length !== 0 &&
      <Grid className={classes.root}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="headline" className={classes.font}>
              This is Paper
            </Typography>
          </CardContent>
        </Card>
      </Grid>
        }
      </div>
    );
  }
}

export default withStyles(styles)(Subs);
