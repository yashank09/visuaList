import React, { Component } from "react";

import {withRouter} from "react-router-dom";

import { view, store } from "react-easy-state";
import details from "../store/index";

import { Grid, Card, CardMedia, Typography } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";
import Artist from "../components/Artist";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 1
  },
  card: {
    width: 220,
    height: 240
  },
  font: {
    color: "#eeeeee",
    marginTop: 10
  },
  media: {
    width: 240,
    height: 260
  }
});

class ArtistLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      justify: "center"
    };
  }

  _onReady(event) {
    event.target.pauseVideo();
  }

  getVideo = (userUrl) => {
    this.props.history.push(`/artist/${userUrl}`);
  }

  render() {
    const { id, thumbUrl, userUrl } = details;
    const { classes } = this.props;
    const { justify } = this.state;
    return (
      <div>
        {details.id &&
          id.map((data, index) => (
            <Grid container justify={justify}  className={classes.root} key={index}>
            <Grid item>
                <Card className={classes.card}>
                  <CardMedia className={classes.media} image={thumbUrl[index]} onClick={this.getVideo.bind(this, userUrl[index])} />
                </Card>
              <Typography
                gutterBottom
                variant="subheading"
                component="h3"
                className={classes.font}
              >
                {data}
              </Typography>
            </Grid>
            </Grid>
          ))}
      </div>
    );
  }
}

export default withRouter(view(withStyles(styles)(ArtistLayout)));
