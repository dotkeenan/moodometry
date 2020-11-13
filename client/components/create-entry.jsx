import React from 'react';
import Events from './events';
import Participants from './participants';
import Notes from './notes';
import TimeConverter from './time-converter';

class CreateEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phase: 'timeAndMood',
      moods: [],
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
  }

  handleClick() {
    const moodId = parseInt(event.target.getAttribute('moodid'), 10);
    // console.log('moodId:', moodId);
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

  componentDidMount() {
    this.getMoods();
  }

  render() {
    const phase = this.state.phase;
    if (phase === 'timeAndMood') {
      return (
        <div className="container">
          <div className="row date-and-mood">
            <h1 className="h1-form">How&apos;s it going?</h1>

            <div className="entry-date-container">
              <div className="date-choice">
                <img src="/images/ui-icons/date-chooser.svg" alt="calendar" />
                <span className="date">{TimeConverter(this.state.entry.time)}</span>
                {/* <img src="/images/ui-icons/down-arrow.svg" alt="" /> */}
              </div>
              {/*
            <div className="time-choice">
              <img src="/images/ui-icons/clock.svg" alt="clock"/>
              <span className="date"></span>
              <img src="/images/ui-icons/down-arrow.svg" alt=""/>
            </div> */}

            </div>

          </div>
          <div className="">
            <div className="mood-chooser row">
              {this.createMoods()}
              {/* old hard-coded moods */}
              {/* <img onClick={this.handleClick} className="mood-svg laugh" src="images/moods/laugh-beam-regular.svg" alt="laugh" />
              <img onClick={this.handleClick} className="mood-svg smile" src="images/moods/smile-regular.svg" alt="smile" />
              <img onClick={this.handleClick} className="mood-svg meh" src="images/moods/meh-regular.svg" alt="meh" />
              <img onClick={this.handleClick} className="mood-svg frown" src="images/moods/frown-regular.svg" alt="frown" />
              <img onClick={this.handleClick} className="mood-svg angry" src="images/moods/angry-regular.svg" alt="angry" /> */}
            </div>
          </div>
        </div>
      );
    } else if (phase === 'eventDetails') {
      return (
        <div className="container">
          <div className="row date-and-mood">
            <h1 className="h1-form">What&apos;s up?</h1>

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
                <img onClick={this.handleAddNote} src="/images/ui-icons/add-detail.svg" alt="add detail" />
                <span className="add-field-text">Add a note</span>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (phase === 'addEvent') {
      return (
        <div className="container">
          <div className="row date-and-mood">
            <h1 className="h1-form">Any events?</h1>

            <div className="container add-field-container">
              <div className="row add-field">
                <Events setEventState={this.setEventState}/>
              </div>
              <div className="row add-field">
                <img onClick={this.handleAddParticipants} src="/images/ui-icons/add-detail.svg" alt="add detail" />
                <span className="add-field-text">Add Participants</span>
              </div>
              <div className="row add-field">
                <img onClick={this.handleAddNote} src="/images/ui-icons/add-detail.svg" alt="add detail" />
                <span className="add-field-text">Add a note</span>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (phase === 'addParticipants') {
      return (
        <div className="container">
          <div className="row date-and-mood">
            <h1 className="h1-form">What&apos;s up?</h1>

            <div className="container add-field-container">
              <div className="row add-field">
                <img onClick={this.handleAddEvent} src="/images/ui-icons/add-detail.svg" alt="add detail" />
                <span className="add-field-text">Add an event</span>
              </div>
              <div className="row add-field">
                <Participants setParticipantState={this.setParticipantState}/>
              </div>
              <div className="row add-field">
                <img onClick={this.handleAddNote} src="/images/ui-icons/add-detail.svg" alt="add detail" />
                <span className="add-field-text">Add a note</span>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (phase === 'addNote') {
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
                <Notes setNoteState={this.setNoteState}/>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default CreateEntry;
/*
    this.handleLaugh = this.handleLaugh.bind(this);
    this.handleSmile = this.handleSmile.bind(this);
    this.handleMeh = this.handleMeh.bind(this);
    this.handleFrown = this.handleFrown.bind(this);
    this.handleAngry = this.handleAngry.bind(this);
    this.todaysDate = this.todaysDate.bind(this);

 handleLaugh() {
    this.setState({ entry: { mood: 'laugh' } });
    this.props.setView('eventDetails');
  }

  handleSmile() {
    this.setState({ entry: { mood: 'smile' } });
    this.props.setView('eventDetails');
  }

  handleMeh() {
    this.setState({ entry: { mood: 'meh' } });
    this.props.setView('eventDetails');
  }

  handleFrown() {
    this.setState({ entry: { mood: 'frown' } });
    this.props.setView('eventDetails');
  }

  handleAngry() {
    this.setState({ entry: { mood: 'angry' } });
    this.props.setView('eventDetails');
  }
*/

/*
    return (
      <div className="container">
        <div className="row">
          <h1>How&apos;s it going?</h1>
          <div className="entry-date-container">
            <img src="/images/ui-icons/date-chooser.svg" alt="calendar"/>
            <img src="/images/ui-icons/clock.svg" alt="clock"/>
          </div>
        </div>
      </div>
    );
*/

/*
austins date code

class CreateEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // possibly delete
      phase: 'timeAndMood',
      moods: [],
      // todaysDate: this.todaysDate(),
      entry: {
        mood: '',
        time: TimeConverter(new Date())
        // time: new Date() object not allowed as react child (in render)
      }
    };
    // setInterval(() => {
    //   this.setState({ todaysDate: this.todaysDate() });
    // }, 1000);
    this.handleClick = this.handleClick.bind(this);
    this.handleAddEvent = this.handleAddEvent.bind(this);
    this.handleAddParticipants = this.handleAddParticipants.bind(this);
    this.handleAddNote = this.handleAddNote.bind(this);
    this.getMoods = this.getMoods.bind(this);
  }

    // todaysDate() {
  //   var d = new Date();
  //   var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  //   var day = days[d.getDay()];
  //   var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  //   var month = months[d.getMonth()];
  //   var date = d.getDate();
  //   var suf = ['th', 'st', 'nd', 'rd'];
  //   var v = date % 100;
  //   date = date + (suf[(v - 20) % 10] || suf[v] || suf[0]);
  //   var hours = d.getHours();
  //   var minutes = d.getMinutes();
  //   var noon = '';

  //   if (hours === 12) {
  //     noon = 'pm';
  //   } else if (hours > 12) {
  //     hours = hours - 12;
  //     noon = 'pm';
  //   } else {
  //     noon = 'am';
  //   }

  //   if (minutes < 10) {
  //     minutes = '0' + minutes;
  //   }
  //   const currentTime = day + ' ' + month + ' ' + date + ', ' + hours + ':' + minutes + ' ' + noon;
  //   return currentTime;
  // }
*/
