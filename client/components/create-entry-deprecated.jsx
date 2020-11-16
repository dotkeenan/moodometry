import React from 'react';
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
      eventsUrls: '',
      eventsLabel: '',
      entry: {
        moodId: null,
        eventId: '',
        participants: 'Add Participants',
        note: 'Add a note',
        time: new Date()
      }
    };
    this.handleClick = this.handleClick.bind(this);
    this.getMoods = this.getMoods.bind(this);
    this.setEventState = this.setEventState.bind(this);
    this.setParticipantState = this.setParticipantState.bind(this);
    this.setNoteState = this.setNoteState.bind(this);
    this.createMoods = this.createMoods.bind(this);
    this.submitEntry = this.submitEntry.bind(this);
    this.setEventUrlAndLabel = this.setEventUrlAndLabel.bind(this);
    this.setPhase = this.setPhase.bind(this);
  }

  handleClick() {
    const moodId = parseInt(event.target.getAttribute('moodid'), 10);
    const newEntryObject = Object.assign({}, this.state.entry);
    newEntryObject.moodId = moodId;
    this.setState({
      phase: 'eventDetails',
      entry: newEntryObject
    });
  }

  submitEntry() {
    const reqOptions = {
      method: 'POST',
      body: JSON.stringify(this.state.entry),
      headers: { 'Content-Type': 'application/json' }
    };
    fetch('api/entries', reqOptions)
      .then(() => this.props.setView('entries'))
      .catch(err => console.error(err));
  }

  setPhase(phase) {
    this.setState({ phase: phase });
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
          className="mood-svg hover-pointer"
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

  setEventUrlAndLabel(url, label) {
    this.setState({
      eventsUrls: url,
      eventsLabel: label
    });
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
          setPhase={this.setPhase}/>;
        break;
      case 'addEvent':
        renderedPhase = <AddEventRender
          setEventState={this.setEventState}
          setPhase={this.setPhase}
          setEventUrlAndLabel={this.setEventUrlAndLabel}
          entryState={this.state.entry}
        />;
        break;
      case 'addParticipants':
        renderedPhase = <AddParticipantsRender
          setPhase={this.setPhase}
          setParticipantState={this.setParticipantState}
          entryState={this.state.entry}
          eventsUrls={this.state.eventsUrls}
          eventsLabel={this.state.eventsLabel} />;
        break;
      case 'addNote':
        renderedPhase = <AddNoteRender
          setPhase={this.setPhase}
          setNoteState={this.setNoteState}
          submitEntry={this.submitEntry}
          entryState={this.state.entry}
          eventsLabel={this.state.eventsLabel}
          eventsUrls={this.state.eventsUrls}
        />;
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
