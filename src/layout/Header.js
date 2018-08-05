import React from "react";
import PropTypes from "prop-types";

import {
  AppBar,
  Toolbar,
  Button,
  Typography
} from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    paddingLeft: 50,
    flexGrow: 1
  }
};

function Header(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography  className={classes.flex} variant="title" color="inherit">
            VisuaList
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
  };  

export default withStyles(styles)(Header);
