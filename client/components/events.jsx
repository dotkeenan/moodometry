import React from 'react';

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      social: [],
      hobbies: [],
      productivity: [],
      chores: [],
      eventsId: '',
      eventsUrls: ''
    };
    // find out which ones to delete later.  Don't need to bind if not passing to another component
    this.handleIconClick = this.handleIconClick.bind(this);
    this.getSocialIcons = this.getSocialIcons.bind(this);
    this.handleEventSubmit = this.handleEventSubmit.bind(this);
    this.getHobbiesIcons = this.getHobbiesIcons.bind(this);
    this.getProductivityIcons = this.getProductivityIcons.bind(this);
    this.getChoresIcons = this.getChoresIcons.bind(this);
    this.socialCreator = this.socialCreator.bind(this);
    this.hobbiesCreator = this.hobbiesCreator.bind(this);
    this.productivityCreator = this.productivityCreator.bind(this);
    this.choresCreator = this.choresCreator.bind(this);
  }

  handleIconClick(event) {
    const eventId = parseInt(event.target.getAttribute('eventid'), 10);
    const eventUrl = (event.target.src);

    if (this.state.eventsId === eventId && this.state.eventsUrls === eventUrl) {
      this.setState({
        eventsId: '',
        eventsUrls: ''
      });
    } else {
      this.setState({
        eventsId: eventId,
        eventsUrls: eventUrl
      });
    }
    // document.querySelectorAll('.invert-event').classList.remove('invert-event');
    event.target.classList.toggle('invert-event');
  }
  // handleIconClick(event) {
  //   const eventId = parseInt(event.target.getAttribute('eventid'), 10);
  //   const eventUrl = (event.target.src);

  //   if (this.state.eventsId === eventId && this.state.eventsUrls === eventUrl) {
  //     this.setState({
  //       eventsId: '',
  //       eventsUrls: ''
  //     });
  //   } else {
  //     this.setState({
  //       eventsId: eventId,
  //       eventsUrls: eventUrl
  //     });
  //   }
  //   event.target.classList.toggle('invert-event');
  // }

  // original
  // handleIconClick(event) {
  //   const eventId = parseInt(event.target.getAttribute('eventid'), 10);
  //   const eventUrl = (event.target.src);

  //   if (this.state.eventsId.includes(eventId) && this.state.eventsUrls.includes(eventUrl)) {
  //     const newEventsId = this.state.eventsId.slice('');
  //     const index = newEventsId.indexOf(eventId);
  //     newEventsId.splice(index, 1);

  //     const newEventsUrls = this.state.eventsUrls.slice('');
  //     const eventUrlsIndex = newEventsUrls.indexOf(eventUrl);
  //     newEventsUrls.splice(eventUrlsIndex, 1);
  //     this.setState({
  //       eventsId: newEventsId,
  //       eventsUrls: newEventsUrls
  //     });
  //   } else {
  //     const newEventsId = this.state.eventsId.slice('');
  //     newEventsId.push(eventId);

  //     const newEventsUrls = this.state.eventsUrls.slice('');
  //     newEventsUrls.push(eventUrl);
  //     this.setState({
  //       eventsId: newEventsId,
  //       eventsUrls: newEventsUrls
  //     });
  //   }
  //   event.target.classList.toggle('invert-event');
  // }

  handleEventSubmit(event) {
    // find a way to transfer this.state.eventsId to create-entry.jsx
    this.props.setEventState(this.state.eventsId);
    this.props.setEventsUrls(this.state.eventsUrls);
    // find a way to close the card then show the icons that were clicked
    // console.log('submitted');
    event.preventDefault();
  }

  getSocialIcons() {
    fetch('api/events/social')
      .then(result => result.json(result.rows))
      .then(socialIcons => {
        this.setState({ social: socialIcons });
      })
      .catch(err => console.error(err));
  }

  getHobbiesIcons() {
    fetch('api/events/hobbies')
      .then(result => result.json(result.rows))
      .then(hobbyIcons => {
        this.setState({ hobbies: hobbyIcons });
      })
      .catch(err => console.error(err));
  }

  getProductivityIcons() {
    fetch('api/events/productivity')
      .then(result => result.json(result.rows))
      .then(productivityIcons => {
        this.setState({ productivity: productivityIcons });
      })
      .catch(err => console.error(err));
  }

  getChoresIcons() {
    fetch('api/events/chores')
      .then(result => result.json(result.rows))
      .then(choreIcons => {
        this.setState({ chores: choreIcons });
      })
      .catch(err => console.error(err));
  }

  socialCreator() {
    const iconGenerator = this.state.social.map(social => {
      return (
        <div className="text-center icon-and-label col-3" key={social.eventsId}>
          <img
            onClick={this.handleIconClick}
            className="svg-icons"
            src={social.imageUrl}
            alt={social.label}
            key={social.eventsId}
            eventid={social.eventsId}
            category={social.eventTypeLabel}>
          </img>
          <p className="event-label text-center">{social.label}</p>
        </div>
      );
    });
    return iconGenerator;
  }

  hobbiesCreator() {
    const iconGenerator = this.state.hobbies.map(hobby => {
      return (
        <div className="text-center icon-and-label col-3" key={hobby.eventsId}>
          <img
            onClick={this.handleIconClick}
            className="svg-icons"
            src={hobby.imageUrl}
            alt={hobby.label}
            key={hobby.eventsId}
            eventid={hobby.eventsId}
            category={hobby.eventTypeLabel}>
          </img>
          <p className="event-label text-center">{hobby.label}</p>
        </div>
      );
    });
    return iconGenerator;
  }

  productivityCreator() {
    const iconGenerator = this.state.productivity.map(productivity => {
      return (
        <div className="text-center icon-and-label col-3" key={productivity.eventsId}>
          <img
            onClick={this.handleIconClick}
            className="svg-icons"
            src={productivity.imageUrl}
            alt={productivity.label}
            key={productivity.eventsId}
            eventid={productivity.eventsId}
            category={productivity.eventTypeLabel}>
          </img>
          <p className="event-label text-center">{productivity.label}</p>
        </div>
      );
    });
    return iconGenerator;
  }

  choresCreator() {
    const iconGenerator = this.state.chores.map(chore => {
      return (
        <div className="text-center icon-and-label col-3" key={chore.eventsId}>
          <img
            onClick={this.handleIconClick}
            className="svg-icons"
            src={chore.imageUrl}
            alt={chore.label}
            key={chore.eventsId}
            eventid={chore.eventsId}
            category={chore.eventTypeLabel}>
          </img>
          <p className="event-label text-center">{chore.label}</p>
        </div>
      );
    });
    return iconGenerator;
  }

  componentDidMount() {
    this.getSocialIcons();
    this.getHobbiesIcons();
    this.getProductivityIcons();
    this.getChoresIcons();
  }

  render() {
    // this doesnt work as intended.  Still seeing icons render in real time.
    if (!this.state.social || !this.state.hobbies || !this.state.productivity || !this.state.chores) {
      return <p>Loading Icons</p>;
    }
    return (
      <React.Fragment>

        <div className="event-container">
          <div className="first-category-container">
            <h6>Social</h6>
            <div className="row category-row justify-content-center">
              {this.socialCreator()}
            </div>
          </div>
          <div className="category-container">
            <h6>Hobbies</h6>
            <div className="row category-row justify-content-center">
              {this.hobbiesCreator()}
            </div>
          </div>
          <div className="category-container">
            <h6>Productivity</h6>
            <div className="row category-row justify-content-center">
              {this.productivityCreator()}
            </div>
          </div>
          <div className="category-container">
            <h6>Chores</h6>
            <div className="row category-row justify-content-center">
              {this.choresCreator()}
            </div>
          </div>
          <div className="check-container">
            <svg
              onClick={this.handleEventSubmit}
              className="check-button"
              width="43" height="43"
              viewBox="0 0 43 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M21.5 41.6562C32.632 41.6562 41.6562 32.632 41.6562 21.5C41.6562 10.368 32.632 1.34375 21.5 1.34375C10.368 1.34375 1.34375 10.368 1.34375 21.5C1.34375 32.632 10.368 41.6562 21.5 41.6562Z" fill="#67D4D2" />
              <path d="M30.9062 9.40625L16.7969 23.9187L12.0938 19.0812L7.39062 23.9187L16.7969 33.5938L35.6094 14.2438L30.9062 9.40625Z" fill="white" />
            </svg>
          </div>
        </div>

      </React.Fragment>
    );
  }

}

export default Events;

/*
render() {
    return (
      <React.Fragment>

        <div className="event-container">
          <div className="hobbie-container">
            <h6>Hobbies</h6>
            <div className="hobbie-icon">
              <img onClick={this.handleIconClick} className="svg-icons" src="images/events/drum-solid.svg" alt="drum-solid"></img>
              <img onClick={this.handleIconClick} className="svg-icons" src="images/events/gamepad-solid.svg" alt="gamepad-solid"></img>
              <img onClick={this.handleIconClick} className="svg-icons" src="images/events/snowboarding-solid.svg" alt="snowboarding-solid"></img>
              <img onClick={this.handleIconClick} className="svg-icons" src="images/events/laptop-code-solid.svg" alt="laptop-code-solid"></img>
            </div>
          </div>
          <div className="social-container">
            <h6>Social</h6>
            <div className="social-icon">
              <img onClick={this.handleIconClick} className="svg-icons" src="images/events/coffee-solid.svg" alt="coffee-solid"></img>
              <img onClick={this.handleIconClick} className="svg-icons" src="images/events/flask-solid.svg" alt="flask-solid"></img>
              <img onClick={this.handleIconClick} className="svg-icons" src="images/events/glass-cheers-solid.svg" alt="glass-cheers-solid"></img>
              <img onClick={this.handleIconClick} className="svg-icons" src="images/events/pencil-alt-solid.svg" alt="pencil-alt-solid"></img>
            </div>
          </div>
          <div className="check-container">
            <svg className="check-button" width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.5 41.6562C32.632 41.6562 41.6562 32.632 41.6562 21.5C41.6562 10.368 32.632 1.34375 21.5 1.34375C10.368 1.34375 1.34375 10.368 1.34375 21.5C1.34375 32.632 10.368 41.6562 21.5 41.6562Z" fill="#67D4D2" />
              <path d="M30.9062 9.40625L16.7969 23.9187L12.0938 19.0812L7.39062 23.9187L16.7969 33.5938L35.6094 14.2438L30.9062 9.40625Z" fill="white" />
            </svg>
          </div>
        </div>

      </React.Fragment>
    );
  }

  // tagCreator(imageUrl, name) {
  //   return (
  //     <img
  //       onClick={this.handleIconClick}
  //       className="svg-icons"
  //       src={imageUrl}
  //       alt={name}>
  //     </img>
  //   );
  // }

*/
