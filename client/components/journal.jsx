import React from 'react';
import Events from './events';
import Participants from './participants';
import Notes from './notes';
class Journal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
    // bind
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <Events />
        </div>
        <div>
          <Participants />
        </div>
        <div>
          <Notes />
        </div>
      </React.Fragment>
    );
  }
}

export default Journal;
