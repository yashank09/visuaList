import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { Grid, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import { withStyles } from "@material-ui/core/styles";

const styles = {
  addButton: {
    color: "#eeeeee",
    fontSize: 60
  },
  card: {
    width: 80,
    height: 80,
    margin: "auto",
    marginTop: 40,
    background: "#ED0000"
  },
  font: {
    color: "#eeeeee",
    paddingTop: 20
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
        <Button className={classes.card} onClick={this.addArtist}>
          <AddIcon className={classes.addButton} />
        </Button>
      </Grid>
    );
  }
}

AddService.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(AddService));