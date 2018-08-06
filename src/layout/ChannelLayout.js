import React, { Component } from "react";

import { Grid } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";

import ChannelCard from "../components/ChannelCard";

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 1,
    padding: 10
  },
  card: {
    width: 220,
    height: 240,
    background: "#ED0000"
  },
  font: {
    color: "#eeeeee"
  }
});

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

class ChannelLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channelInfo: false,
      channelData: []
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
    let title = this.state.channelData[0];
    
    return (
      <Grid item xs={6} md={4} className={classes.root}>
        {
          title && 
          <ChannelCard data={title} />

        }
      </Grid>
    );
  }
}

export default withStyles(styles)(ChannelLayout);
