import React, { Component } from "react";
import axios from "axios";

import CsrfToken from "./CsrfToken.js";

export default class MoodSuggestForm extends Component {
  state = {
    suggestedMood: ""
  };

  componentDidMount() {
    // axios.defaults.xsrfCookieName = "csrftoken";
    // axios.defaults.xsrfHeaderName = "X-CSRFToken";
    // console.log(axios);
  }

  changeHandler = e => {
    this.setState({ suggestedMood: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.props);
    const newMood = {
      video_id: this.props.trackProps.track.video_id,
      video_title: this.props.trackProps.track.video_title,
      correct_moods: this.state.suggestedMood
    };
    console.log({ ...newMood });
    axios
      .post(
        "https://moodibeats-recommender.herokuapp.com/api/new-videos-moods/",
        { ...newMood }
      )
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    this.setState({ suggestedMood: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <CsrfToken />
          <input
            type="button"
            onClick={this.changeHandler}
            value="HAPPY"
            name="Happy"
          />
          <input
            type="button"
            onClick={this.changeHandler}
            value="SAD"
            name="Sad"
          />
          <input
            type="button"
            onClick={this.changeHandler}
            value="ANGRY"
            name="Angry"
          />
          <input
            type="button"
            onClick={this.changeHandler}
            value="CHILL"
            name="Chill"
          />
          <input
            type="button"
            onClick={this.changeHandler}
            value="IN-LOVE"
            name="In-Love"
          />
          <input
            type="button"
            onClick={this.changeHandler}
            value="CONFIDENT/SASSY"
            name="Confident/Sassy"
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
