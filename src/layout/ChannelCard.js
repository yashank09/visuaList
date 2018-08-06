import React, { Component } from "react";

// import Details from "../store/index";

import { Grid, Card, CardMedia,Typography } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";

const styles = {
  card: {
    width: 180,
    height: 200
  },
  font: {
    color: "#eeeeee",
    marginTop: 10
  },
  media: {
      width: 200,
      height: 220
  }
};

class ChannelCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      justify: "center"
    };
  }

  render() {
    const channelData = this.props.data.snippet;
    const imgUrl = channelData.thumbnails.medium.url;
    console.log(imgUrl);
    const { classes } = this.props;
    const { justify } = this.state;
    return (
      <Grid container justify={justify}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={imgUrl}
            title="Contemplative Reptile"
          />
        </Card>

        <Typography>aSAS</Typography>
      </Grid>
    );
  }
}

export default withStyles(styles)(ChannelCard);
