import React, { useState, useEffect } from "react";
import "../style/voting.styles.scss";

export default class emojiVoting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      votes: {
        "😀": 0,
        "😂": 0,
        "😎": 0,
        "😍": 0,
        "🤔": 0,
      },
      winner: null,
    };
  }

  handleVote = (emoji) => {
    this.setState((prevState) => {
      const newVotes = {
        ...prevState.votes,
        [emoji]: prevState.votes[emoji] + 1,
      };

      localStorage.setItem("emojiVotes", JSON.stringify(newVotes));

      return { votes: newVotes };
    });
  };

  showResults = () => {
    const { votes } = this.state;
    const winner = Object.keys(votes).reduce((a, b) =>
      votes[a] > votes[b] ? a : b
    );
    this.setState({ winner });
  };

  clearResults = () => {
    const resetVotes = {
      "😀": 0,
      "😂": 0,
      "😎": 0,
      "😍": 0,
      "🤔": 0,
    };

    localStorage.removeItem("emojiVotes");
    this.setState({ votes: resetVotes, winner: null });
  };

  render() {
    const { votes, winner } = this.state;

    return (
      <div className="emoji__voting-container">
        <h1 className="emoji__title">Emoji Voting</h1>

        <div className="emoji__list">
          {Object.keys(votes).map((emoji) => (
            <div
              key={emoji}
              className="emoji__item"
              onClick={() => this.handleVote(emoji)}
            >
              <span>{emoji}</span>
              <div className="emoji__votes">{votes[emoji]} votes</div> {}
            </div>
          ))}
        </div>

        <div className="button__inner">
          <button className="button" onClick={this.showResults}>
            Show Result
          </button>
          <button className="button" onClick={this.clearResults}>
            Clear Result
          </button>
        </div>

        {winner && <div className="winner"> Winner: {winner}</div>}
      </div>
    );
  }
}
