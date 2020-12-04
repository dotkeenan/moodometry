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
      eventsUrls: '',
      eventsLabel: ''
    };
    this.handleIconClick = this.handleIconClick.bind(this);
    this.handleEventSubmit = this.handleEventSubmit.bind(this);
  }

  handleIconClick(event) {
    const eventId = parseInt(event.target.getAttribute('eventid'), 10);
    const eventUrl = (event.target.src);
    const eventLabel = event.target.alt;
    const allSvgs = document.querySelectorAll('.svg-icons');
    allSvgs.forEach(svg => svg.classList.remove('invert-event'));
    if (this.state.eventsId === eventId && this.state.eventsUrls === eventUrl) {
      this.setState({
        eventsId: '',
        eventsUrls: '',
        eventsLabel: ''
      });

    } else {
      this.setState({
        eventsId: eventId,
        eventsUrls: eventUrl,
        eventsLabel: eventLabel
      });
      event.target.classList.toggle('invert-event');
    }
  }

  handleEventSubmit(event) {
    this.props.setEventState(this.state.eventsId);
    this.props.setEventUrlAndLabel(this.state.eventsUrls, this.state.eventsLabel);
    this.props.handleAddEvent();

    event.preventDefault();
  }

  getIcons(iconType) {
    fetch(`api/events/${iconType}`)
      .then(result => result.json(result.rows))
      .then(icons => {
        this.setState({ [iconType]: icons });
      })
      .catch(err => console.error(err));
  }

  iconCreator(iconType) {
    const iconGenerator = this.state[iconType].map(icons => {
      return (
        <div className="text-center icon-and-label col-3" key={icons.eventsId}>
          <img
            onClick={this.handleIconClick}
            className="svg-icons"
            src={icons.imageUrl}
            alt={icons.label}
            key={icons.eventsId}
            eventid={icons.eventsId}
            category={icons.eventTypeLabel}>
          </img>
          <p className="event-label text-center">{icons.label}</p>
        </div>
      );
    });
    return iconGenerator;
  }

  componentDidMount() {
    this.getIcons('social');
    this.getIcons('hobbies');
    this.getIcons('productivity');
    this.getIcons('chores');
  }

  render() {
    if (!this.state.social || !this.state.hobbies || !this.state.productivity || !this.state.chores) {
      return <p>Loading Icons</p>;
    }
    return (
      <React.Fragment>

        <div className="event-container">
          <div className="first-category-container">
            <h6>Social</h6>
            <div className="row category-row justify-content-center">
              {this.iconCreator('social')}
            </div>
          </div>
          <div className="category-container">
            <h6>Hobbies</h6>
            <div className="row category-row justify-content-center">
              {this.iconCreator('hobbies')}
            </div>
          </div>
          <div className="category-container">
            <h6>Productivity</h6>
            <div className="row category-row justify-content-center">
              {this.iconCreator('productivity')}
            </div>
          </div>
          <div className="category-container">
            <h6>Chores</h6>
            <div className="row category-row justify-content-center">
              {this.iconCreator('chores')}
            </div>
          </div>
          <div className="check-container">
            <svg
              onClick={this.handleEventSubmit}
              className="check-button hover-pointer"
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
