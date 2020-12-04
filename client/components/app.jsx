import React from 'react';
import Header from './header';
import EntryList from './entry-list';
import Nav from './nav';
import Stats from './stats';
import Calendar from './calendar';
import FilterEntry from './filter-entry';
import HomePage from './homepage';
import TimeAndMood from './time-and-mood';
import EventDetailsRender from './event-details-render';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'entries'
      },
      headerLabel: 'Entries',
      filterModal: false,
      filterOptions: {
        moodId: '',
        eventId: '',
        dowId: '',
        sort: 'DESC'
      },
      editMode: false,
      moods: [],
      eventsUrls: '',
      eventsLabel: '',
      entry: {
        entryId: null,
        moodId: null,
        eventId: '',
        participants: '',
        note: '',
        time: new Date()
      }
    };
    this.setView = this.setView.bind(this);
    this.displayModal = this.displayModal.bind(this);
    this.setFilterOptions = this.setFilterOptions.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getMoods = this.getMoods.bind(this);
    this.setEventState = this.setEventState.bind(this);
    this.setParticipantState = this.setParticipantState.bind(this);
    this.setNoteState = this.setNoteState.bind(this);
    this.createMoods = this.createMoods.bind(this);
    this.submitEntry = this.submitEntry.bind(this);
    this.setEventUrlAndLabel = this.setEventUrlAndLabel.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.setHeaderLabel = this.setHeaderLabel.bind(this);
    this.setEntryStateEdit = this.setEntryStateEdit.bind(this);
    this.setEditMode = this.setEditMode.bind(this);
    this.editEntry = this.editEntry.bind(this);
  }

  setHeaderLabel(label) {
    this.setState({
      headerLabel: label
    });
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
    this.setState({
      filterOptions: filterOptions,
      filterModal: false
    });
  }

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

  editEntry() {
    const reqOptions = {
      method: 'PUT',
      body: JSON.stringify(this.state.entry),
      headers: { 'Content-Type': 'application/json' }
    };
    fetch(`api/entries/${this.state.entry.entryId}`, reqOptions)
      .then(() => {
        this.resetForm();
        this.setView('entries');
      })
      .catch(err => console.error(err));
  }

  resetForm() {
    this.setState({
      editMode: false,
      eventsUrls: '',
      eventsLabel: '',
      entry: {
        entryId: null,
        moodId: null,
        eventId: '',
        participants: '',
        note: '',
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

  setEntryStateEdit(eventsUrls, eventsLabel, entryId, moodId, eventId, participants, note, time) {
    this.setState({
      eventsUrls: eventsUrls,
      eventsLabel: eventsLabel,
      entry: {
        entryId: entryId,
        moodId: moodId,
        eventId: eventId,
        participants: participants,
        note: note,
        time: time
      }
    });
  }

  setEditMode(status) {
    this.setState({ editMode: status });
  }

  componentDidMount() {
    this.getMoods();
  }

  render() {
    let view = null;

    if (this.state.view.name === 'homepage') {
      return (
        <HomePage setView={this.setView} setHeaderLabel={this.setHeaderLabel}/>
      );
    }

    switch (this.state.view.name) {
      case 'entries':
        view = <EntryList
          filterOptions={this.state.filterOptions}
          setView={this.setView}
          setHeaderLabel={this.setHeaderLabel}
          setEntryStateEdit={this.setEntryStateEdit}
          setEditMode={this.setEditMode} />;
        break;
      case 'stats':
        view = <Stats setView={this.setView} />;
        break;
      case 'calendar':
        view = <Calendar setView={this.setView} />;
        break;
      case 'timeAndMood':
        view = <TimeAndMood
          createMoods={this.createMoods}
          entry={this.state.entry}
          editMode={this.state.editMode}
          state={this.state} />;
        break;
      case 'eventDetails':
        view = <EventDetailsRender
          setView={this.setView}
          setEventState={this.setEventState}
          setEventUrlAndLabel={this.setEventUrlAndLabel}
          state={this.state}
          setParticipantState={this.setParticipantState}
          setNoteState={this.setNoteState}
          submitEntry={this.submitEntry}
          editEntry={this.editEntry}
          editMode={this.state.editMode} />;
        break;
    }

    return (
      <React.Fragment>

        <Header
          displayModal={this.displayModal}
          headerLabel={this.state.headerLabel}/>
        {view}
        <FilterEntry
          showModal={this.state.filterModal}
          setFilterOptions={this.setFilterOptions} />
        <Nav
          setView={this.setView}
          resetForm={this.resetForm}
          setHeaderLabel={this.setHeaderLabel}/>

      </React.Fragment>

    );
  }
}
