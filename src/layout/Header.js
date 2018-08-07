import React from "react";
import PropTypes from "prop-types";

import { AppBar, Toolbar } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";

import AddLayout from "./AddLayout";

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1
  }
};

function Header(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <AddLayout />
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
