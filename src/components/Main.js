import React, { Component } from "react";
import PropTypes from "prop-types";
import Details from "../store/index";
import { Route, withRouter } from "react-router-dom";

import { Grid, Typography, Paper } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";

import AddLayout from "../layout/AddLayout";
import ArtistLayout from "../layout/ArtistLayout";
import AddArtist from "./AddArtist";
import Artist from "./Artist";

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 1,
    paddingBottom: theme.spacing.unit * 1
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 150
  },
  back: {
    flexGrow: 1,
    background: "#3d3838",
    paddingTop: 50,
    paddingBottom: 80
  },
  font: {
    color: "#eeeeee"
  }
});

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showArtist: false
    };
  }

  componentDidMount() {
    if (Details.id.length !== 0) {
      this.setState({ showArtist: true });
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root}>
        <Paper className={classes.back} elevation={1}>
          <Typography
            className={classes.font}
            variant="headline"
            component="h3"
          >
            Save and Watch your Favourite YouTube Artists
          </Typography>
          <div>
            <AddLayout />
          </div>
          <Route exact path="/" component={ArtistLayout} />
          <Route exact path="/addArtist" component={AddArtist} />
          <Route exact path="/artist/:id" component={Artist} />
        </Paper>
      </Grid>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(Main));
