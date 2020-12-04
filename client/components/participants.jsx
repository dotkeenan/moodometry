import React from 'react';

class Participants extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      participants: this.props.state.entry.participants
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ participants: event.target.value });
  }

  handleSubmit(event) {
    this.props.setParticipantState(this.state.participants);
    this.props.handleAddParticipants();
    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <div className="participants-container">
          <div className="container d-flex flex-column align-items-center justify-contents-around">
            <h4>Add participants</h4>
            <textarea
              value={this.state.participants}
              onChange={this.handleChange}
              className="participants-input"
              name="participants"
              cols="40" rows="2"
              style={{ width: '90%', height: '60px' }}
              placeholder="Austin, Keenan, Zack">
            </textarea>
            <button className="check-container participants-submit">
              <svg
                onClick={this.handleSubmit}
                className="check-button"
                width="43"
                height="43"
                viewBox="0 0 43 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M21.5 41.6562C32.632 41.6562 41.6562 32.632 41.6562 21.5C41.6562 10.368 32.632 1.34375 21.5 1.34375C10.368 1.34375 1.34375 10.368 1.34375 21.5C1.34375 32.632 10.368 41.6562 21.5 41.6562Z" fill="#67D4D2" />
                <path d="M30.9062 9.40625L16.7969 23.9187L12.0938 19.0812L7.39062 23.9187L16.7969 33.5938L35.6094 14.2438L30.9062 9.40625Z" fill="white" />
              </svg>
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Participants;
