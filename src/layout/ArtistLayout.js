import React, { Component } from "react";

import { withRouter } from "react-router-dom";

import { view } from "react-easy-state";
import details from "../store/index";

import { Grid, Card, CardMedia, Typography } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 1,
    overflow: "auto"
  },
  card: {
    width: 260,
    height: 280,
    marginLeft: 20,
    marginRight: 20
  },
  font: {
    color: "#eeeeee",
    marginTop: 20
  },
  media: {
    width: 260,
    height: 280
  },
  roll: {
    overflow: "auto"
  },
  flow: {
    marginTop: 20,
    minWidth: 650,
    maxWidth: 1500,
    overflow: "visible"
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

  getVideo = userUrl => {
    this.props.history.push(`/artist/${userUrl}`);
  };

  render() {
    const { id, thumbUrl, userUrl } = details;
    const { classes } = this.props;
    return (
      <div>
        <Typography
              className={classes.font}
              variant="headline"
              component="h3"
            >
            Your Personalized YouTube Library
            </Typography>
        {!details.id.length ? (
          <div>
            <Typography
              className={classes.font}
              variant="subheading"
              component="h3"
            >
            Press The Logo To Add Your First Channel
            </Typography>
          </div>
        ) : (
          <div>
            <Grid item xs={6} md={4}>
              <Typography
                className={classes.font}
                variant="headline"
                component="h3"
              >
                Your Library
              </Typography>
            </Grid>
            <Grid className={classes.roll}>
              <Grid container className={classes.flow}>
                {id.map((data, index) => (
                  <Grid key={index}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.media}
                        image={thumbUrl[index]}
                        onClick={this.getVideo.bind(this, userUrl[index])}
                      />
                    </Card>
                    <Grid item>
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
              </Grid>
            </Grid>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(view(withStyles(styles)(ArtistLayout)));
