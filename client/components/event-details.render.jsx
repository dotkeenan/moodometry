import React from 'react';
import Events from './events';
import Participants from './participants';

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

  render() {
    const eventLabel = this.props.state.eventsLabel;
    return (
      <div className="container">
        <div className="row date-and-mood">
          <h1 className="h1-form">What&apos;s up?</h1>

          <div className="container add-field-container-start">
            {this.state.eventOpen
              ? <div className="add-field">
                <Events
                  setEventState={this.props.setEventState}
                  setEventUrlAndLabel={this.props.setEventUrlAndLabel}
                  setView={this.props.setView}
                  handleAddEvent={this.handleAddEvent}
                />
              </div>
              : <div className="row add-field">
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
                    {eventLabel.charAt(0).toUpperCase() + eventLabel.slice(1)}
                  </span>
                </span>
              </div>
            }
            {/* My attempt at re-formatting the application so that it all is
            conditional rendering from event-details.render.jsx instead of hacky
            modules that just re-render the same stuff with one change

            So far I transfered add-event-render's functionality all into here.
<Participants setParticipantState={props.setParticipantState} setView={props.setView}/>
            */}
            {this.state.participantsOpen
              ? <div className="add-field">
                <Participants
                  setParticipantState={this.props.setParticipantState}
                  handleAddParticipants={this.handleAddParticipants}/>
              </div>
              : <div className="row add-field">
                <img className="hover-pointer" onClick={this.handleAddParticipants} src="/images/ui-icons/add-detail.svg" alt="add detail" />
                <span className="add-field-text hover-pointer"
                  onClick={this.handleAddParticipants}>
                  {this.props.state.entry.participants}
                </span>
              </div>
            }

            <div className="row add-field">
              <img className="hover-pointer" onClick={this.handleAddNote} src="/images/ui-icons/add-detail.svg" alt="add detail" />
              <span className="add-field-text hover-pointer" onClick={this.handleAddNote}>Add a note</span>
            </div>
          </div>
        </div>
      </div>
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
