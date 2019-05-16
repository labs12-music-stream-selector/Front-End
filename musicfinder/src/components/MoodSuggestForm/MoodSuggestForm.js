import React, { Component } from "react";
import axios from "axios";

import CsrfToken from "./CsrfToken.js";

export default class MoodSuggestForm extends Component {
  state = {
    suggestedMood: ""
  };

  changeHandler = e => {
    this.setState({ suggestedMood: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newMood = {
      video_id: this.props.video_id,
      video_title: this.props.video_title,
      correct_moods: this.state.suggestedMood
    };
    axios
      .post(
        "https://moodibeats-recommender.herokuapp.com/api/new-videos-moods/",
        ...newMood
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
            value="Happy"
            name="HAPPY"
          />
          <input
            type="button"
            onClick={this.changeHandler}
            value="Sad"
            name="SAD"
          />
          <input
            type="button"
            onClick={this.changeHandler}
            value="Angry"
            name="ANGRY"
          />
          <input
            type="button"
            onClick={this.changeHandler}
            value="Chill"
            name="CHILL"
          />
          <input
            type="button"
            onClick={this.changeHandler}
            value="In-Love"
            name="IN-LOVE"
          />
          <input
            type="button"
            onClick={this.changeHandler}
            value="Confident/Sassy"
            name="CONFIDENT/SASSY"
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
