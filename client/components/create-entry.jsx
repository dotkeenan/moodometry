import React from 'react';
// not needed here after refactor
// import Events from './events';
// not needed here after refactor
// import Participants from './participants';
// not needed after refactor
// import Notes from './notes';
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
        eventId: '',
        participants: '',
        note: '',
        time: new Date() // possible issue of not being a JSON?
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
    this.submitEntry = this.submitEntry.bind(this);
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

  submitEntry() {
    // eslint-disable-next-line
    console.log(this.state.entry);
    const reqOptions = {
      method: 'POST',
      body: JSON.stringify(this.state.entry),
      headers: { 'Content-Type': 'application/json' }
    };
    fetch('api/entries', reqOptions)
      .then(() => this.setState({
        phase: 'moodAndTime',
        entry: {
          moodId: null,
          eventId: '',
          participants: '',
          note: '',
          time: new Date()
        }
      }));
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
          setNoteState={this.setNoteState}
          submitEntry={this.submitEntry}/>;
        break;

    }

    return (
      <div className="container cutoff-fix">
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
