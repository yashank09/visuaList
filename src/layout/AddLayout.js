import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { Grid, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import { withStyles } from "@material-ui/core/styles";

const styles = {
  addButton: {
    color: "#2B2B2B",
    fontSize: 40
  },
  card: {
    width: 50,
    height: 50,
    margin: "auto",
    background: "#F00"
  }
};

class AddService extends Component {
  addArtist = () => {
    this.props.history.push("/addArtist");
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid item xs={12}>
        <IconButton className={classes.card} onClick={this.addArtist}>
          <AddIcon className={classes.addButton} />
        </IconButton>
      </Grid>
    );
  }
}

AddService.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(AddService));