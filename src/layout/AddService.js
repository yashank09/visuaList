import React from "react";
import PropTypes from "prop-types";

import { Grid, Typography, Button } from "@material-ui/core";
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
    background: "#cc181e"
  },
  font: {
    color: "#eeeeee",
    paddingTop: 20
  }
};

function AddService(props) {
  const { classes } = props;
  return (
    <Grid item xs={12}>
      <Button className={classes.card}>
        <AddIcon className={classes.addButton} />
      </Button>
      <Typography variant="subheading" className={classes.font}>
        Add New Artist
      </Typography>
    </Grid>
  );
}

AddService.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddService);
