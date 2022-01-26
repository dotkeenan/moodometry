import React from 'react';
import Events from './events';
import Participants from './participants';
import Notes from './notes';

class EventDetailsRender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventOpen: false,
      participantsOpen: false,
      noteOpen: false
    };
    this.handleAddParticipants = this.handleAddParticipants.bind(this);
    this.handleAddEvent = this.handleAddEvent.bind(this);
    this.handleAddNote = this.handleAddNote.bind(this);
    this.eventRender = this.eventRender.bind(this);
    this.participantsRender = this.participantsRender.bind(this);
    this.noteRender = this.noteRender.bind(this);
    this.handleEntrySubmit = this.handleEntrySubmit.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
    this.formSubmissionType = this.formSubmissionType.bind(this);
  }

  handleAddEvent() {
    this.setState({
      eventOpen: !this.state.eventOpen,
      participantsOpen: false,
      noteOpen: false
    });
  }

  handleAddParticipants() {
    this.setState({
      participantsOpen: !this.state.participantsOpen,
      eventOpen: false,
      noteOpen: false
    });
  }

  handleAddNote() {
    this.setState({
      noteOpen: !this.state.noteOpen,
      eventOpen: false,
      participantsOpen: false
    });
  }

  // might be unnecessary.  but I guess makes it more clear.
  handleEntrySubmit() {
    this.props.submitEntry();
  }

  handleEditSubmit() {
    this.props.editEntry();
  }

  formSubmissionType() {
    if (this.props.editMode) {
      return (
        <button
          className="btn btn-primary submit-entry"
          onClick={this.handleEditSubmit}>
          Edit Entry
        </button>
      );
    } else {
      return (
        <button
          className="btn  submit-entry"
          onClick={this.handleEntrySubmit}>
        Submit Entry
        </button>
      );
    }
  }

  eventRender() {
    const eventLabel = this.props.state.eventsLabel;
    if (this.state.eventOpen) {
      return (
        <div className="add-field">
          <Events
            setEventState={this.props.setEventState}
            setEventUrlAndLabel={this.props.setEventUrlAndLabel}
            setView={this.props.setView}
            handleAddEvent={this.handleAddEvent}
          />
        </div>
      );
    } else {
      return (
        <div className="row add-field pl-3">
          <img
            className="hover-pointer plus-button-hover"
            onClick={this.handleAddEvent}
            src="/images/ui-icons/add-detail.svg"
            alt="add detail"
          />
          <span
            className="add-field-text hover-pointer plus-button-hover"
            onClick={this.handleAddEvent}
          >
            {this.props.state.eventsUrls ? (
              <img
                className="selected-event hover-pointer mr-3"
                src={this.props.state.eventsUrls}
              />
            ) : null}
            <span>
              {this.props.state.eventsLabel
                ? eventLabel.charAt(0).toUpperCase() + eventLabel.slice(1)
                : 'Add Event'}
            </span>
          </span>
        </div>
      );
    }
  }

  participantsRender() {
    if (this.state.participantsOpen) {
      return (
        <div className="add-field">
          <Participants
            setParticipantState={this.props.setParticipantState}
            handleAddParticipants={this.handleAddParticipants}
            state={this.props.state}/>
        </div>
      );
    } else {
      return (
        <div className="row add-field pl-3">
          <img
            className="hover-pointer plus-button-hover"
            onClick={this.handleAddParticipants}
            src="/images/ui-icons/add-detail.svg"
            alt="add detail"
          />
          <span
            className="add-field-text hover-pointer plus-button-hover"
            onClick={this.handleAddParticipants}
          >
            {this.props.state.entry.participants
              ? this.props.state.entry.participants
              : 'Add Participants'}
          </span>
        </div>
      );
    }
  }

  noteRender() {
    if (this.state.noteOpen) {
      return (
        <div className="add-field">
          <Notes
            setNoteState={this.props.setNoteState}
            state={this.props.state}
            handleAddNote={this.handleAddNote}
          />
        </div>
      );
    } else {
      return (
        <div className="row add-field pl-3">
          <img
            className="hover-pointer plus-button-hover"
            onClick={this.handleAddNote}
            src="/images/ui-icons/add-detail.svg"
            alt="add detail"
          />
          <span
            className="add-field-text hover-pointer plus-button-hover"
            onClick={this.handleAddNote}
          >
            {this.props.state.entry.note
              ? this.props.state.entry.note
              : 'Add Note'}
          </span>
        </div>
      );
    }
  }

  render() {
    return (
      <>
        <div className="container mt-4 cutoff-fix event-details-container">
          <div className="row date-and-mood">
            <h1 className="h1-form">What&apos;s up?</h1>

            <div className="container">
              {this.eventRender()}
              {this.participantsRender()}
              {this.noteRender()}
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              {this.formSubmissionType()}
            </div>
          </div>
        </div>

      </>
    );
  }

}

export default EventDetailsRender;
