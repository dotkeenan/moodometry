import React from 'react';
import Notes from './notes';

class AddNoteRender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false
    };
    this.setSubmitState = this.setSubmitState.bind(this);
    this.handleEntrySubmit = this.handleEntrySubmit.bind(this);
  }

  setSubmitState(value) {
    this.setState({
      isSubmitted: value
    });
  }

  handleEntrySubmit() {
    this.props.submitEntry();
    // this.props.setView();
  }

  render() {
    if (!this.state.isSubmitted) {
      return (
        <div className="container">
          <div className="row date-and-mood">
            <h1 className="h1-form">With who?</h1>

            <div className="container add-field-container">
              <div className="row add-field">
                <img onClick={this.props.handleAddEvent} src="/images/ui-icons/add-detail.svg" alt="add detail" />
                <span className="add-field-text">Add an event</span>
              </div>
              <div className="row add-field">
                <img onClick={this.props.handleAddParticipants} src="/images/ui-icons/add-detail.svg" alt="add detail" />
                <span className="add-field-text">Add Participants</span>
              </div>
              <div className="row add-field">
                <Notes setNoteState={this.props.setNoteState} setSubmitState={this.setSubmitState} />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="row date-and-mood">
            <h1 className="h1-form">With who?</h1>

            <div className="container add-field-container">
              <div className="row add-field">
                <img onClick={this.props.handleAddEvent} src="/images/ui-icons/add-detail.svg" alt="add detail" />
                <span className="add-field-text">Add an event</span>
              </div>
              <div className="row add-field">
                <img onClick={this.props.handleAddParticipants} src="/images/ui-icons/add-detail.svg" alt="add detail" />
                <span className="add-field-text">Add Participants</span>
              </div>
              <div className="row add-field">
                <Notes setNoteState={this.props.setNoteState} setSubmitState={this.setSubmitState} />
              </div>
            </div>

            <button
              className="btn btn-primary submit-entry"
              onClick={this.handleEntrySubmit}>
                Submit Entry
            </button>

          </div>
        </div>
      );
    }

  }
}

export default AddNoteRender;
