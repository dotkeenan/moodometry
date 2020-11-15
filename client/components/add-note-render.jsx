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
    // console.log('props.entryState', props.entryState);
    this.createEventIcons = this.createEventIcons.bind(this);
    this.createParticipantsText = this.createParticipantsText.bind(this);
    this.handleNoteEdit = this.handleNoteEdit.bind(this);
    this.createNoteText = this.createNoteText.bind(this);
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

  createEventIcons() {
    if (!this.props.eventsUrls) {
      return <span className="selected-participants hover-pointer" onClick={this.props.handleAddEvent}>Add an Event</span>;
    } else {
      return (
        <span className="selected-event-span">
          <img className="selected-event hover-pointer" src={this.props.eventsUrls} alt={this.props.eventsLabel} />
          <span className="selected-event-text">{this.props.eventsLabel}</span>
        </span>
      );
    }
  }

  createParticipantsText() {
    return (
      <span className="selected-participants hover-pointer" onClick={this.props.handleAddParticipants}>
        {this.props.entryState.participants}
      </span>
    );
  }

  createNoteText() {
    return (
      <span className="selected-note hover-pointer" onClick={this.handleNoteEdit}>
        {this.props.entryState.note}
      </span>
    );
  }

  handleNoteEdit() {
    this.props.handleAddNote();
    this.setState({ isSubmitted: false });
  }

  render() {
    if (!this.state.isSubmitted) {
      return (
        <div className="container">
          <div className="row date-and-mood">
            <h1 className="h1-form">With who?</h1>

            <div className="container add-field-container">
              <div className="add-field">
                <img className="hover-pointer" onClick={this.props.handleAddEvent} src="/images/ui-icons/add-detail.svg" alt="add detail" />
                {this.createEventIcons()}
              </div>
              <div className="add-field">
                <img className="hover-pointer" onClick={this.props.handleAddParticipants} src="/images/ui-icons/add-detail.svg" alt="add detail" />
                {this.createParticipantsText()}
              </div>
              <div className="add-field">
                <Notes
                  setNoteState={this.props.setNoteState}
                  setSubmitState={this.setSubmitState}
                  eventsUrls={this.props.eventsUrls}
                  eventLabel={this.props.eventLabel}
                  entryState={this.props.entryState}/>
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
              <div className="add-field">
                <img className="hover-pointer" onClick={this.props.handleAddEvent} src="/images/ui-icons/add-detail.svg" alt="add detail" />
                {this.createEventIcons()}
              </div>
              <div className="add-field">
                <img className="hover-pointer" onClick={this.props.handleAddParticipants} src="/images/ui-icons/add-detail.svg" alt="add detail" />
                {this.createParticipantsText()}
              </div>
              <div className="add-field">
                <img className="hover-pointer" onClick={this.handleNoteEdit} src="/images/ui-icons/add-detail.svg" alt="add detail" />
                {this.createNoteText()}
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

/*
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
    // console.log('props.entryState', props.entryState);
    this.createEventIcons = this.createEventIcons.bind(this);
    this.createParticipantsText = this.createParticipantsText.bind(this);
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

  createEventIcons() {
    return (
      <span className="selected-event-span">
        <img className="selected-event" src={this.props.eventsUrls} alt={this.props.eventsLabel} />
      </span>
    );
  }

  createParticipantsText() {
    return (
      <span className="selected-participants">
        {this.props.entryState.participants}
      </span>
    );
  }

  createNoteText() {
    return (
      <span className="selected-participants">
        {this.props.entryState.note}
      </span>
    );
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
                {this.createEventIcons()}
              </div>
              <div className="row add-field">
                <img onClick={this.props.handleAddParticipants} src="/images/ui-icons/add-detail.svg" alt="add detail" />
                {this.createParticipantsText()}
              </div>
              <div className="row add-field">
                <Notes setNoteState={this.props.setNoteState} setSubmitState={this.setSubmitState} eventsUrls={this.props.eventsUrls} eventLabel={this.props.eventLabel}/>
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
                {this.createEventIcons()}
              </div>
              <div className="row add-field">
                <img onClick={this.props.handleAddParticipants} src="/images/ui-icons/add-detail.svg" alt="add detail" />
                {this.createParticipantsText()}
              </div>
              <div className="row add-field">
                <img onClick={this.props.handleAddNote} src="/images/ui-icons/add-detail.svg" alt="add detail" />
                {this.createNoteText()}
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

*/
