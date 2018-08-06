import React, { Component } from "react";
import {withRouter} from "react-router-dom";

import { Grid, TextField } from "@material-ui/core";

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

class Artist extends Component {
  constructor(props) {
    super(props);
  }
  render() {
  console.log(this.props.match.params.id);
    return <div>HEY</div>;
  }
};

export default withRouter(Artist);
