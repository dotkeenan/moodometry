import React from 'react';

import Header from './header';
import EntryList from './entry-list';
import Nav from './nav';
// import CreateEntry from './create-entry';
import Stats from './stats';
import FilterEntry from './filter-entry';
import HomePage from './homepage';
// create entry stuff
import TimeAndMood from './time-and-mood';
import EventDetailsRender from './event-details.render';
import AddEventRender from './add-event-render';
import AddParticipantsRender from './add-participants-render';
import AddNoteRender from './add-note-render';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'homepage'
      },
      // useless i think. this was before and goes along with addEntry
      entries: [],
      filterModal: false,
      filterOptions: {
        moodId: '',
        eventId: '',
        dowId: '',
        sort: 'DESC'
      },
      // create-entry stuff
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
    this.setView = this.setView.bind(this);

    this.displayModal = this.displayModal.bind(this);
    this.setFilterOptions = this.setFilterOptions.bind(this);
    // create entry stuff
    this.handleClick = this.handleClick.bind(this);
    this.getMoods = this.getMoods.bind(this);
    this.setEventState = this.setEventState.bind(this);
    this.setParticipantState = this.setParticipantState.bind(this);
    this.setNoteState = this.setNoteState.bind(this);
    this.createMoods = this.createMoods.bind(this);
    this.submitEntry = this.submitEntry.bind(this);
    this.setEventUrlAndLabel = this.setEventUrlAndLabel.bind(this);
    this.resetForm = this.resetForm.bind(this);
    // this.setPhase = this.setPhase.bind(this);
  }

  setView(name) {
    this.setState({
      view: { name: name }
    });
  }

  displayModal() {
    this.setState({
      filterModal: !this.state.filterModal
    });
  }

  setFilterOptions(filterOptions) {
    // let newFilterOptions = {...this.state.filterOptions};

    this.setState({
      filterOptions: filterOptions,
      filterModal: false
    });
  }

  // create entry stuff
  handleClick() {
    const moodId = parseInt(event.target.getAttribute('moodid'), 10);
    const newEntryObject = Object.assign({}, this.state.entry);
    newEntryObject.moodId = moodId;
    this.setState({
      view: { name: 'eventDetails' },
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
      .then(() => {
        this.resetForm();
        this.setView('entries');
      })
      .catch(err => console.error(err));
  }

  resetForm() {
    this.setState({
      eventsUrls: '',
      eventsLabel: '',
      entry: {
        moodId: null,
        eventId: '',
        participants: 'Add Participants',
        note: 'Add a note',
        time: new Date()
      }
    });
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
    let view = null;

    if (this.state.view.name === 'homepage') {
      return (
        <HomePage setView={this.setView}/>
      );
    }

    switch (this.state.view.name) {
      case 'entries':
        view = <EntryList filterOptions={this.state.filterOptions} />;
        break;
      case 'stats':
        view = <Stats setView={this.setView} />;
        break;
      case 'timeAndMood':
        view = <TimeAndMood createMoods={this.createMoods} entry={this.state.entry} />;
        break;
      case 'eventDetails':
        view = <EventDetailsRender
          setView={this.setView} />;
        break;
      case 'addEvent':
        view = <AddEventRender
          setEventState={this.setEventState}
          setView={this.setView}
          setEventUrlAndLabel={this.setEventUrlAndLabel}
          entryState={this.state.entry}
        />;
        break;
      case 'addParticipants':
        view = <AddParticipantsRender
          setView={this.setView}
          setParticipantState={this.setParticipantState}
          entryState={this.state.entry}
          eventsUrls={this.state.eventsUrls}
          eventsLabel={this.state.eventsLabel} />;
        break;
      case 'addNote':
        view = <AddNoteRender
          setView={this.setView}
          setNoteState={this.setNoteState}
          submitEntry={this.submitEntry}
          entryState={this.state.entry}
          eventsLabel={this.state.eventsLabel}
          eventsUrls={this.state.eventsUrls}
        />;
        break;
    }

    return (
      <React.Fragment>

        <Header displayModal={this.displayModal} name={this.state.view.name} />
        {view}
        <FilterEntry showModal={this.state.filterModal} setFilterOptions={this.setFilterOptions} />
        <Nav setView={this.setView} resetForm={this.resetForm}/>

      </React.Fragment>

    );
  }
}

/*
if (this.state.view.name === 'homepage') {
      view = <HomePage />;
    } else
*/

// convert to the above switch statement.
// if (this.state.view.name === 'entries') {
//   view = <EntryList filterOptions={this.state.filterOptions} />;
// } else if (this.state.view.name === 'createEntry') {
//   view = <CreateEntry setView={this.setView} />;
// } else if (this.state.view.name === 'Journal') {
//   view = <Journal setView={this.setView} />;
// } else if (this.state.view.name === 'stats') {
//   view = <Stats setView={this.setView} />;
// }
