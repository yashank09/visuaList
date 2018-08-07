import React, { Component } from "react";

import YouTube from "react-youtube";

import { Grid, Card, Typography } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";

const styles = {
  card: {
    height: 700
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
    event.target.pauseVideo();
  }

  render() {
    console.log(this.props.vidId);
    const { classes } = this.props;
    const { justify } = this.state;
    const opts = {
      width: "100%",
      height: "100%",
      playerVars: {
        autoplay: 1,
        rel: 0
      }
    };

    return ( 
      <React.Fragment>
        <Grid container justify={justify}>
          <Grid item xs={12} md={12}>
            <Card className={classes.card}>
              <YouTube
                videoId={this.props.vidId}
                opts={opts}
                onReady={this._onReady}
              />
            </Card>
            <Typography
              gutterBottom
              variant="headline"
              component="h3"
              className={classes.font}
            >
              {this.props.title}
            </Typography>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(VideoCard);
