import React, { Component } from "react";
import YouTube from "react-youtube";

import { Grid, Card, CardContent, Typography } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";

const API_KEY = "AIzaSyAskAaX_vZNeHgw18OWrxvzygJfsQT9VXg";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 1
  },
  card: {
    width: 180,
    height: 200,
    background: "#cc181e"
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

  componentDidMount() {
    fetch(`https://www.googleapis.com/youtube/v3/channels?part=id&forUsername=TreeJTV&key=${API_KEY}
    `)
      .then(res => res.json())
      .then(data => this.setState({ id: data.items[0].id }));
    fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${
        this.state.id
      }&key=${API_KEY}`
    )
      .then(res => res.json())
      .then(data => this.setState({thumbUrl: data.items[0].snippet.thumbnails.medium}));
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  render() {
    console.log(this.state.thumbUrl);
    const opts = {
      height: "450",
      width: "680",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    const { classes } = this.props;
    return (
      <Grid container className={classes.root}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="subheading" className={classes.font}>
              This is Paper
            </Typography>
          </CardContent>
        </Card>
        {/* <YouTube
        videoId="2g811Eo7K8U"
        opts={opts}
        onReady={this._onReady}
      /> */}
      </Grid>
    );
  }
}

export default withStyles(styles)(Subs);
