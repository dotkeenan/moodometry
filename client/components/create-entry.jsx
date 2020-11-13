import React from 'react';
// not needed here after refactor
// import Events from './events';
// not needed here after refactor
// import Participants from './participants';
import Notes from './notes';
// not needed here after refactor??
// import TimeConverter from './time-converter';
import TimeAndMood from './time-and-mood';
import EventDetailsRender from './event-details.render';
import AddEventRender from './add-event-render';
import AddParticipantsRender from './add-participants-render';
import AddNoteRender from './add-note-render';

class CreateEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phase: 'timeAndMood',
      moods: [],
      eventsUrls: [],
      entry: {
        moodId: null,
        time: new Date(), // possible issue of not being a JSON?
        eventId: '',
        participants: '',
        note: ''
      }
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleAddEvent = this.handleAddEvent.bind(this);
    this.handleAddParticipants = this.handleAddParticipants.bind(this);
    this.handleAddNote = this.handleAddNote.bind(this);
    this.getMoods = this.getMoods.bind(this);
    this.setEventState = this.setEventState.bind(this);
    this.setParticipantState = this.setParticipantState.bind(this);
    this.setNoteState = this.setNoteState.bind(this);
    this.createMoods = this.createMoods.bind(this);
    this.setEventsUrls = this.setEventsUrls.bind(this);
  }

  handleClick() {
    const moodId = parseInt(event.target.getAttribute('moodid'), 10);
    const newEntryObject = Object.assign({}, this.state.entry);
    newEntryObject.moodId = moodId;
    this.setState({
      phase: 'eventDetails',
      entry: newEntryObject
    });
    // this.setState({
    //   phase: 'eventDetails',
    //   entry: {
    //     moodId: moodId,
    //     time: new Date() // possible issue of not being a JSON?
    //   }
    // });
  }

  handleAddEvent() {
    this.setState({ phase: 'addEvent' });
  }

  handleAddParticipants() {
    this.setState({ phase: 'addParticipants' });
  }

  handleAddNote() {
    this.setState({ phase: 'addNote' });
  }

  getMoods() {
    fetch('/api/moods')
      .then(result => result.json(result.rows))
      .then(moods => {
        this.setState({
          moods: moods
        });
      })
      .catch(err => console.error(err));
  }

  createMoods() {
    const moodIconGenerator = this.state.moods.map(mood => {
      return (
        <img
          onClick={this.handleClick}
          className="mood-svg laugh"
          src={mood.imageUrl}
          alt={mood.label}
          key={mood.moodId}
          moodid={mood.moodId} />
      );
    });
    return moodIconGenerator;
  }

  setEventState(eventIdValue) {
    const newEntryObject = Object.assign({}, this.state.entry);
    newEntryObject.eventId = eventIdValue;
    this.setState({ entry: newEntryObject });
  }

  setParticipantState(participants) {
    const newEntryObject = Object.assign({}, this.state.entry);
    newEntryObject.participants = participants;
    this.setState({ entry: newEntryObject });
  }

  setNoteState(note) {
    const newEntryObject = Object.assign({}, this.state.entry);
    newEntryObject.note = note;
    this.setState({ entry: newEntryObject });
  }

  setEventsUrls(eventUrls) {
    this.setState({ eventsUrls: eventUrls });
  }

  componentDidMount() {
    this.getMoods();
  }

  addNote() {
    return (
      <div className="container">
        <div className="row date-and-mood">
          <h1 className="h1-form">With who?</h1>

          <div className="container add-field-container">
            <div className="row add-field">
              <img onClick={this.handleAddEvent} src="/images/ui-icons/add-detail.svg" alt="add detail" />
              <span className="add-field-text">Add an event</span>
            </div>
            <div className="row add-field">
              <img onClick={this.handleAddParticipants} src="/images/ui-icons/add-detail.svg" alt="add detail" />
              <span className="add-field-text">Add Participants</span>
            </div>
            <div className="row add-field">
              <Notes setNoteState={this.setNoteState} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const phase = this.state.phase;
    let renderedPhase = null;
    switch (phase) {
      case 'timeAndMood':
        renderedPhase = <TimeAndMood createMoods={this.createMoods} entry={this.state.entry} />;
        break;
      case 'eventDetails':
        renderedPhase = <EventDetailsRender
          handleAddEvent={this.handleAddEvent}
          handleAddParticipants={this.handleAddParticipants}
          handleAddNote={this.handleAddNote} />;
        break;
      case 'addEvent':
        renderedPhase = <AddEventRender
          setEventState={this.setEventState}
          handleAddParticipants={this.handleAddParticipants}
          handleAddNote={this.handleAddNote}
          setEventsUrls={this.setEventsUrls}
        />;
        break;
      case 'addParticipants':
        renderedPhase = <AddParticipantsRender
          handleAddEvent={this.handleAddEvent}
          setParticipantState={this.setParticipantState}
          handleAddNote={this.handleAddNote} />;
        break;
      case 'addNote':
        renderedPhase = <AddNoteRender
          handleAddEvent={this.handleAddEvent}
          handleAddParticipants={this.handleAddParticipants}
          setNoteState={this.setNoteState} />;
        break;

    }

    return (
      <div className="container">
        <div className="row date-and-mood">
          {renderedPhase}
        </div>
      </div>
    );
  }
}

export default CreateEntry;

/* alternative working version of render()
 if (phase === 'timeAndMood') {
      renderedPhase = <TimeAndMood createMoods={this.createMoods} entry={this.state.entry}/>;
    } else if (phase === 'eventDetails') {
      renderedPhase = <EventDetailsRender
        handleAddEvent={this.handleAddEvent}
        handleAddParticipants={this.handleAddParticipants}
        handleAddNote={this.handleAddNote}/>;
    } else if (phase === 'addEvent') {
      renderedPhase = <AddEventRender
        setEventState={this.setEventState}
        handleAddParticipants={this.handleAddParticipants}
        handleAddNote={this.handleAddNote}/>;
    } else if (phase === 'addParticipants') {
      renderedPhase = <AddParticipantsRender
        handleAddEvent={this.handleAddEvent}
        setParticipantState={this.setParticipantState}
        handleAddNote={this.handleAddNote}/>;
    } else if (phase === 'addNote') {
      renderedPhase = <AddNoteRender
        handleAddEvent={this.handleAddEvent}
        handleAddParticipants={this.handleAddParticipants}
        setNoteState={this.setNoteState}/>;
    }
*/
