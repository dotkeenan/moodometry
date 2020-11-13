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
      }

    };
    // bind
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.handleClick4 = this.handleClick4.bind(this);
    this.handleClick5 = this.handleClick5.bind(this);

    this.setFilterOptions = this.setFilterOptions.bind(this);
  }

  handleClick1() {
    this.setState({
      filterOptions: { moodId: '1' }
    });
  }

  handleClick2() {
    this.setState({
      filterOptions: { moodId: '2' }
    });
  }

  handleClick3() {
    this.setState({
      filterOptions: { moodId: '3' }
    });
  }

  handleClick4() {
    this.setState({
      filterOptions: { moodId: '4' }
    });
  }

  handleClick5() {
    this.setState({
      filterOptions: { moodId: '5' }
    });
  }

  setFilterOptions() {
    this.props.setFilterOptions(this.state.filterOptions);

  }

  render() {

    if (this.props.showModal) {
      return (
        <React.Fragment>
          <div className='modal-container'>
            <div className="modal-wrapper">
              <div className="modal-header">
                <h4 className="modal-title">Filter Options</h4>
              </div>
              <div className="modal-body">
                <img onClick={this.handleClick1} className="mood-modal" src="images/moods/laugh-beam-regular.svg" alt="laugh" />
                <img onClick={this.handleClick2} className="mood-modal" src="images/moods/smile-regular.svg" alt="smile" />
                <img onClick={this.handleClick3} className="mood-modal" src="images/moods/meh-regular.svg" alt="meh" />
                <img onClick={this.handleClick4} className="mood-modal" src="images/moods/frown-regular.svg" alt="frown" />
                <img onClick={this.handleClick5} className="mood-modal" src="images/moods/angry-regular.svg" alt="angry" />
              </div>
              <div className="modal-body">
                <h6>sun</h6>
                <h6>mon</h6>
                <h6>tue</h6>
                <h6>wed</h6>
                <h6>thu</h6>
                <h6>fri</h6>
                <h6>sat</h6>
              </div>
              <h4 className="drop-title">Events</h4>
              <div className="modal-body">
                <form>
                  <select className="select-modal" name = "dropdown">
                    <option value = "" ></option>
                    <option value = "">Java</option>
                    <option value = ""></option>
                  </select>
                </form>
              </div>
              <h4 className="drop-title">Sort by</h4>
              <div className="modal-body">
                <h6>Date Des</h6>
                <h6>Date Asc</h6>
              </div>
              <div className="modal-footer">

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
