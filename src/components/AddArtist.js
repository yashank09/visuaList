import React, { Component } from "react";

import { Grid, TextField } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";

import ChannelLayout from "../layout/ChannelLayout";

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

const styles = {
  root: {
    paddingTop: 40
  },
  input: {
    width: 200,
    color: "#eeeeee",

  }
};

class AddArtist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      channelIds: []
    };
  }

  getVideo = async e => {
    e.preventDefault();
    let query = this.state.search;
    let dataId = [];
    await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=channel&key=${API_KEY}&maxResults=6`
    )
      .then(res => res.json())
      .then(data => data.items.map(id => dataId.push(id.id)))
      .catch(err => console.log("error API!"));
    this.setState({ channelIds: dataId });
  };

  getSearch = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <form onSubmit={this.getVideo}>
            <TextField
              className={classes.input}
              InputProps={{
                className: classes.input
              }}
              onChange={this.getSearch}
              value={this.state.search}
            />
          </form>
        </Grid>
        {this.state.channelIds.map(id => (
          <ChannelLayout data={id} key={id.channelId} />
        ))}
      </Grid>
    );
  }
}

export default withStyles(styles)(AddArtist);
