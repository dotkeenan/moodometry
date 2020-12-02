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
  }

  handleAddEvent() {
    this.setState({
      eventOpen: !this.state.eventOpen
    });
  }

  handleAddParticipants() {
    this.setState({
      participantsOpen: !this.state.participantsOpen
    });
  }

  handleAddNote() {
    this.setState({
      noteOpen: !this.state.noteOpen
    });
  }
  // handleAddEvent() {
  //   this.props.setView('addEvent');
  // }

  // handleAddParticipants() {
  //   this.props.setView('addParticipants');
  // }

  // handleAddNote() {
  //   this.props.setView('addNote');
  // }

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
        <div className="row add-field">
          <img
            className="hover-pointer"
            onClick={this.handleAddEvent}
            src="/images/ui-icons/add-detail.svg"
            alt="add detail" />
          <span
            className="add-field-text hover-pointer"
            onClick={this.handleAddEvent}>
            <img
              className="selected-event hover-pointer"
              src={this.props.state.eventsUrls}
            />
            <span
              className="add-field-text">
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
        <div className="row add-field">
          <img className="hover-pointer" onClick={this.handleAddParticipants} src="/images/ui-icons/add-detail.svg" alt="add detail" />
          <span className="add-field-text hover-pointer"
            onClick={this.handleAddParticipants}>
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
            // setSubmitState={this.setSubmitState}
            // eventsUrls={this.props.eventsUrls}
            // eventLabel={this.props.eventLabel}
            // entryState={this.props.entryState}
            state={this.props.state}
            handleAddNote={this.handleAddNote}
          />
        </div>
      );
    } else {
      return (
        <div className="row add-field">
          <img
            className="hover-pointer"
            onClick={this.handleAddNote}
            src="/images/ui-icons/add-detail.svg"
            alt="add detail" />
          <span
            className="add-field-text hover-pointer"
            onClick={this.handleAddNote}>
            {this.props.state.entry.note
              ? this.props.state.entry.note
              : 'Add Note'}
          </span>
        </div>
      );
    }
  }

  handleEntrySubmit() {
    this.props.submitEntry();
  }

  /* My attempt at re-formatting the application so that it all is
conditional rendering from event-details.render.jsx instead of hacky
modules that just re-render the same stuff with one change

So far I transfered add-event-render's functionality all into here.
<Participants setParticipantState={props.setParticipantState} setView={props.setView}/>
*/
  render() {
    return (
      <>
        <div className="container">
          <div className="row date-and-mood">
            <h1 className="h1-form">What&apos;s up?</h1>

            <div className="container add-field-container-start">
              {this.eventRender()}
              {this.participantsRender()}
              {this.noteRender()}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <button
              className="btn btn-primary submit-entry"
              onClick={this.handleEntrySubmit}>
              Submit Entry
            </button>
          </div>
        </div>
      </>
    );
  }

}

export default EventDetailsRender;

// import React from 'react';

// function EventDetailsRender(props) {
//   function handleAddEvent() {
//     props.setView('addEvent');
//   }
//   function handleAddParticipants() {
//     props.setView('addParticipants');
//   }
//   function handleAddNote() {
//     props.setView('addNote');
//   }
//   return (
//     <div className="container">
//       <div className="row date-and-mood">
//         <h1 className="h1-form">What&apos;s up?</h1>

//         <div className="container add-field-container-start">
//           <div className="row add-field">
//             <img className="hover-pointer" onClick={handleAddEvent} src="/images/ui-icons/add-detail.svg" alt="add detail" />
//             <span className="add-field-text hover-pointer" onClick={handleAddEvent}>Add an event</span>
//           </div>
//           <div className="row add-field">
//             <img className="hover-pointer" onClick={handleAddParticipants} src="/images/ui-icons/add-detail.svg" alt="add detail" />
//             <span className="add-field-text hover-pointer" onClick={handleAddParticipants}>Add Participants</span>
//           </div>
//           <div className="row add-field">
//             <img className="hover-pointer" onClick={handleAddNote} src="/images/ui-icons/add-detail.svg" alt="add detail" />
//             <span className="add-field-text hover-pointer" onClick={handleAddNote}>Add a note</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default EventDetailsRender;
