import React from 'react';

class CreateEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entry: {},
      details: {
        event: false,
        participants: false,
        note: false
      }
    };
    this.handleLaugh = this.handleLaugh.bind(this);
    this.handleSmile = this.handleSmile.bind(this);
    this.handleMeh = this.handleMeh.bind(this);
    this.handleFrown = this.handleFrown.bind(this);
    this.handleAngry = this.handleAngry.bind(this);
  }

  // this probably is not the right way to do this. seems repetitive
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

  render() {

    return (
      <div className="container">
        <div className="row date-and-mood">
          <h1 className="h1-form">How&apos;s it going?</h1>

          <div className="entry-date-container">
            <div className="date-choice">
              <img src="/images/ui-icons/date-chooser.svg" alt="calendar" />
              <span className="date">Today, November 9</span>
              <img src="/images/ui-icons/down-arrow.svg" alt="" />
            </div>

            <div className="time-choice">
              <img src="/images/ui-icons/clock.svg" alt="clock"/>
              <span className="date">12:00 PM</span>
              <img src="/images/ui-icons/down-arrow.svg" alt=""/>
            </div>
          </div>

        </div>
        <div className="">
          <div className="mood-chooser row">
            <img onClick={this.handleLaugh} className="mood-svg laugh" src="images/moods/smile-regular.svg" alt="smile" />
            <img onClick={this.handleSmile} className="mood-svg meh" src="images/moods/meh-regular.svg" alt="meh" />
            <img onClick={this.handleMeh} className="mood-svg smile" src="images/moods/laugh-beam-regular.svg" alt="laugh" />
            <img onClick={this.handleFrown} className="mood-svg frown" src="images/moods/frown-regular.svg" alt="frown" />
            <img onClick={this.handleAngry} className="mood-svg angry" src="images/moods/angry-regular.svg" alt="angry" />
          </div>
        </div>
      </div>
    );
  }
}

export default CreateEntry;

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
