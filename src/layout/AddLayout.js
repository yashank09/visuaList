import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { Grid, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import { withStyles } from "@material-ui/core/styles";

const styles = {
  addButton: {
    color: "#eeeeee",
    fontSize: 40
  },
  card: {
    width: 50,
    height: 50,
    margin: "auto",
    marginTop: 30,
    background: "#ED0000"
  },
  font: {
    color: "#eeeeee"
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