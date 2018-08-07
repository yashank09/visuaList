import React, { Component } from "react";

import { Grid } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";

import VideoCard from "../components/VideoCard";

const styles = () => ({
  card: {
    background: "#ED0000"
  },
  font: {
    color: "#eeeeee"
  }
});

class VideoLayout extends Component {
  constructor(){
    super();
    window.YTConfig = {
      host: "https://www.youtube.com"
    };
  }

  render() {
    const data = this.props.data.items;
    const { classes } = this.props;
    return (
      <div>
      { data &&
      data.map((data,index) =>
      <Grid className={classes.root}  key={index}>
        {
          <VideoCard vidId={data.id.videoId} />
        }
      </Grid>
      )}
      </div>
    );
  }
}

export default withStyles(styles)(VideoLayout);
