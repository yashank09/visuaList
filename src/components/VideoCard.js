import React, { Component } from "react";

import YouTube from "react-youtube";

import { Grid, Card, Typography } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";

const styles = {
  card: {
    height: 300
  },
  font: {
    color: "#eeeeee",
    marginTop: 10
  }
};

class VideoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      justify: "center"
    };
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  render() {
    const { classes } = this.props;
    const { justify } = this.state;
    const opts = {
      width: "100%",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    console.log(this.props.data);
    return (
      <React.Fragment>
        <Grid container justify={justify}>
          <Grid item xs={12} md={6}>
            <Card className={classes.card}>
              <YouTube
                videoId="2g811Eo7K8U"
                opts={opts}
                onReady={this._onReady}
              />
            </Card>
          </Grid>
            <Typography
              gutterBottom
              variant="subheading"
              component="h3"
              className={classes.font}
            >
              title
            </Typography>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(VideoCard);
