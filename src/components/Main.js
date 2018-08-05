import React, { Component } from "react";
import PropTypes from "prop-types";
import Details from "../store/index";
import { Route, withRouter } from "react-router-dom";

import { Grid, Typography, Paper } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";

import AddLayout from "../layout/AddLayout";
import ArtistCard from "./ArtistCard";
import AddArtist from "./AddArtist";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
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
    color: "#eeeeee",
    paddingTop: 20
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
    window.YTConfig = {
      host: "https://www.youtube.com"
    };

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
            <AddLayout/>
          </div>
        <Route exact path="/" component={ArtistCard} />
        <Route exact path="/addArtist" component={AddArtist} />
        </Paper>
      </Grid>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(Main));
