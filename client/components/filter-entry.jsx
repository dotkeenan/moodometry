import React from 'react';

class FilterEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterOptions: {
        moodId: '',
        eventId: '',
        dowId: '',
        sort: 'DESC'
      },
      filterEvents: []

    };
    // bind
    this.setFilterOptions = this.setFilterOptions.bind(this);
    this.getMoodCss = this.getMoodCss.bind(this);
    this.getDowCss = this.getDowCss.bind(this);
  }

  handleClickMood(e, mood) {
    const newFilterOptions = { ...this.state.filterOptions };
    newFilterOptions.moodId = (this.state.filterOptions.moodId === mood) ? '' : mood;
    this.setState({ filterOptions: newFilterOptions });
  }

  handleClickDow(e, dow) {
    const newFilterOptions = { ...this.state.filterOptions };
    newFilterOptions.dowId = (this.state.filterOptions.dowId === dow) ? '' : dow;
    this.setState({ filterOptions: newFilterOptions });
  }

  handleClickEvent(e) {
    console.log(e.target.value);

    var selectedEvent = this.state.filterEvents.filter(item => item.label === e.target.value);
    console.log(selectedEvent);
    const newFilterOptions = { ...this.state.filterOptions };
    newFilterOptions.eventId = (this.state.filterOptions.eventId === selectedEvent[0].eventsId ? '' : (selectedEvent[0].eventsId));
    this.setState({ filterOptions: newFilterOptions });
  }

  setFilterOptions() {
    this.props.setFilterOptions(this.state.filterOptions);
  }

  clearFilterOptions(e) {
    const newFilterOptions = { ...this.state.filterOptions };
    newFilterOptions.moodId = '';
    newFilterOptions.eventId = '';
    newFilterOptions.dowId = '';
    newFilterOptions.sort = 'DESC';
    this.setState({ filterOptions: newFilterOptions });
  }

  componentDidMount() {
    fetch('/api/events')
      .then(result => result.json())
      .then(events => {
        console.log(events);
        this.setState({
          filterEvents: events
        });
      });
  }

  getMoodCss(moodId) {
    if (this.state.filterOptions.moodId === moodId) {
      return 'mood-modal selected-filter';
    } else {
      return 'mood-modal';
    }
  }

  getDowCss(dowId) {
    if (this.state.filterOptions.dowId === dowId) {
      return 'selected-filter';
    } else {
      return '';
    }
  }

  getSortCss(sort) {
    if (this.state.filterOptions.sort === sort) {
      return 'selected-filter';
    } else {
      return '';
    }
  }

  render() {

    const drop = this.state.filterEvents;
    const optionItems = drop.map(drop =>
      <option value={drop.label} key={drop.eventsId} data-id={drop.eventsId}>{drop.label}</option>
    );

    if (this.props.showModal) {
      return (
        <React.Fragment>
          <div className='modal-container'>
            <div className="modal-wrapper">
              <div className="modal-header">
                <h4 className="modal-title">Filter Options</h4>
              </div>
              <div className="modal-body">
                <img onClick={e => this.handleClickMood(e, 1)} className={this.getMoodCss(1)} src="images/moods/laugh-beam-regular.svg" alt="laugh" />
                <img onClick={e => this.handleClickMood(e, 2)} className={this.getMoodCss(2)} src="images/moods/smile-regular.svg" alt="smile" />
                <img onClick={e => this.handleClickMood(e, 3)} className={this.getMoodCss(3)} src="images/moods/meh-regular.svg" alt="meh" />
                <img onClick={e => this.handleClickMood(e, 4)} className={this.getMoodCss(4)} src="images/moods/frown-regular.svg" alt="frown" />
                <img onClick={e => this.handleClickMood(e, 5)} className={this.getMoodCss(5)} src="images/moods/angry-regular.svg" alt="angry" />
              </div>
              <div className="modal-body-days">
                <h6 onClick={e => this.handleClickDow(e, 0)} className={this.getDowCss(0)}>sun</h6>
                <h6 onClick={e => this.handleClickDow(e, 1)} className={this.getDowCss(1)}>mon</h6>
                <h6 onClick={e => this.handleClickDow(e, 2)} className={this.getDowCss(2)}>tue</h6>
                <h6 onClick={e => this.handleClickDow(e, 3)} className={this.getDowCss(3)}>wed</h6>
                <h6 onClick={e => this.handleClickDow(e, 4)} className={this.getDowCss(4)}>thu</h6>
                <h6 onClick={e => this.handleClickDow(e, 5)} className={this.getDowCss(5)}>fri</h6>
                <h6 onClick={e => this.handleClickDow(e, 6)} className={this.getDowCss(6)}>sat</h6>
              </div>
              <h4 className="drop-title">Events</h4>
              <div className="modal-body">
                <form>
                  <select onChange={e => this.handleClickEvent(e)} className="select-modal" name = "dropdown">
                    {optionItems}
                  </select>
                </form>
              </div>
              <h4 className="drop-title">Sort by</h4>
              <div className="modal-body">
                <h6 className={this.getSortCss(1)}>Date Des</h6>
                <h6 className={this.getSortCss(2)}>Date Asc</h6>
              </div>
              <div className="modal-footer">

                <button className='clear-button' onClick={e => this.clearFilterOptions(e) }>clear</button>

                <svg onClick={this.setFilterOptions} className="check-button" width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.5 41.6562C32.632 41.6562 41.6562 32.632 41.6562 21.5C41.6562 10.368 32.632 1.34375 21.5 1.34375C10.368 1.34375 1.34375 10.368 1.34375 21.5C1.34375 32.632 10.368 41.6562 21.5 41.6562Z" fill="#67D4D2" />
                  <path d="M30.9062 9.40625L16.7969 23.9187L12.0938 19.0812L7.39062 23.9187L16.7969 33.5938L35.6094 14.2438L30.9062 9.40625Z" fill="white" />
                </svg>

              </div>
            </div>
          </div>

        </React.Fragment>

      );
    } else {
      return null;
    }

  }

}

export default FilterEntry;
