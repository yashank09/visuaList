import React, { Component } from "react";
import PropTypes from "prop-types";
import Details from "../store/index";
import { Route, withRouter } from "react-router-dom";

import { Grid, Paper } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";

import ArtistLayout from "../layout/ArtistLayout";
import AddArtist from "./AddArtist";
import Artist from "./Artist";

const styles = theme => ({
  background: {
    flexGrow: 1,
    overflow: "hidden",
    background: "#2b2b2b",
    paddingBottom: 80
  },
  font: {
    color: "#eeeeee",
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
        <Paper className={classes.background} elevation={1}>
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