import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { view } from "react-easy-state";
import details from "../store/index";

import { Grid, Card, CardMedia, Typography } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";

const styles = {
  card: {
    width: 200,
    height: 220
  },
  font: {
    color: "#eeeeee",
    marginTop: 10
  },
  media: {
    width: 220,
    height: 240
  }
};

class ChannelCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      justify: "center"
    };
  }

  addChannel = (title, imgUrl, profileUrl) => {
    details.id = [...details.id, title];
    details.thumbUrl = [...details.thumbUrl, imgUrl];
    details.userUrl = [...details.userUrl, profileUrl]
    this.props.history.push("/");
  };

  render() {
    const channelData = this.props.data.snippet;
    const title = channelData.title;
    const imgUrl = channelData.thumbnails.medium.url;
    const profileUrl = channelData.customUrl;
    const { classes } = this.props;
    const { justify } = this.state;
    return (
      <React.Fragment>
        <Grid container justify={justify}>
          <Card
            className={classes.card}
            onClick={this.addChannel.bind(this, title, imgUrl, profileUrl)}
          >
            <CardMedia
              className={classes.media}
              image={imgUrl}
              title={channelData.description}
              id={profileUrl}
            />
          </Card>
        </Grid>
        <Typography
          gutterBottom
          variant="subheading"
          component="h3"
          className={classes.font}
        >
          {title}
        </Typography>
      </React.Fragment>
    );
  }
}

export default withRouter(view(withStyles(styles)(ChannelCard)));
