import React from 'react';

class AddEntryItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  render() {
    return (
      <React.Fragment>
        <div className="add-entry-container">
          <div>
            <h1>What Have you been up to?</h1>
          </div>
          <div className="events-container">
            <img className="button-icon" src="/images/ui-icons/add.svg"></img>
            <h3 className="event-title">Add an event</h3>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AddEntryItems;
