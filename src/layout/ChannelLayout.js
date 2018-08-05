import React, { Component } from "react";

import Details from "../store/index";

import { Grid, Card, Typography } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 1,
    padding: 10
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

const API_KEY = "AIzaSyAskAaX_vZNeHgw18OWrxvzygJfsQT9VXg";

class ChannelLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channelInfo: false,
      channelData: [],
      justify: "center"
    };
  }

  componentDidMount() {
    fetch(
      `https://www.googleapis.com/youtube/v3/channels?id=${
        this.props.data.channelId
      }&key=${API_KEY}&part=snippet`
    )
      .then(res => res.json())
      .then(data => this.setState({ channelData: data.items }))
      .catch(err => console.log("channel Fetch error!"));
  }

  render() {
    const { classes } = this.props;
    const { justify } = this.state;
    let title = this.state.channelData[0];
    return (
      <Grid item xs={6} md={4} className={classes.root}>
        {title && (
          <Grid container justify={justify}>
            <Card className={classes.card}>
              <p>{title.snippet.title}</p>
            </Card>
          </Grid>
        )}
      </Grid>
    );
  }
}

export default withStyles(styles)(ChannelLayout);
