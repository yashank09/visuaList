import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import VideoLayout from "../layout/VideoLayout";

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

class Artist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoData: []
    };
  }
  componentDidMount() {
    const userId = this.props.match.params.id;
    fetch(
      `https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=${userId}&maxResults=3&key=${API_KEY}`
    )
      .then(res => res.json())
      .then(data => this.setState({ videoData: data }));
  }

  render() {
    return (
      <React.Fragment>
        <VideoLayout data={this.state.videoData} />
      </React.Fragment>
    );
  }
}

export default withRouter(Artist);
