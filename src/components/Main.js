import React, { Component } from "react";
import PropTypes from "prop-types";

import { Grid, Typography, Paper, Card, CardContent } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import { withStyles } from "@material-ui/core/styles";

import Subs from "./Subs";

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
    color: "#eeeeee"
  },
  card: {
    width: 160,
    height: 160,
    margin: "auto",
    marginTop: 40,
    background: "#cc181e"
  },
  addButton: {
    color: "#eeeeee",
    marginTop: 10,
    width: 80,
    height: 80
  }
});

class Main extends Component {
    componentDidMount(){
        window.YTConfig = {
            host: 'https://www.youtube.com' 
          };
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
            Save and Watch your Favourite Youtube Artists
          </Typography>
          <div>
            <Grid item xs={12}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography variant="subheading" className={classes.font}>
                    Add New Artist
                  </Typography>
                  <AddIcon className={classes.addButton} />
                </CardContent>
              </Card>
            </Grid>
          </div>
          <Subs />
        </Paper>
      </Grid>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Main);
