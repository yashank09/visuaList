import React, { Component } from "react";

import { Grid } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";

import VideoCard from "../components/VideoCard";

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 1,
  },
  card: {
    background: "#ED0000"
  },
  font: {
    color: "#eeeeee"
  }
});

class VideoLayout extends Component {
  componentWillMount(){
    window.YTConfig = {
      host: "https://www.youtube.com"
    };
  }
  render() {
    const data = this.props.data.items;
    const { classes } = this.props;
    return (
      <Grid className={classes.root}>
        {
          <VideoCard data={data}/>

        }
      </Grid>
    );
  }
}

export default withStyles(styles)(VideoLayout);
