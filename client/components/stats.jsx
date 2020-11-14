import React from 'react';

class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mood: [],
      time: [],
      event: []
    };
    this.getEntries = this.getEntries.bind(this);
  }

  componentDidMount() {
    this.getEntries();
  }

  getEntries() {
    fetch('/api/entries')
      .then(result => {
        return result.json();
      })
      .then(entries => {
        const arr = [...entries];
        const mood = [];
        const time = [];
        const event = [];
        for (var i = 0; i < arr.length; i++) {
          mood.push(arr[i].mood);
          time.push(arr[i].time);
          event.push(arr[i].event);
        }
        this.setState({
          mood: mood,
          time: time,
          event: event
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <React.Fragment>

      </React.Fragment>
    );
  }
}

export default Stats;
