import React, { Component } from "react";

export default class MoodSuggestForm extends Component {
  state = {
    suggestedMood: ""
  };

  render() {
    return (
      <div>
        <button>Happy</button>
        <button>Sad</button>
        <button>Angry</button>
        <button>Chill</button>
        <button>In-Love</button>
        <button>Confident/Sassy</button>
      </div>
    );
  }
}
