import React from 'react';
import Events from './events';

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
      </React.Fragment>
    );
  }
}

export default Journal;
