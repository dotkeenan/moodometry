import React from 'react';
import Header from './header';
import EntryList from './entry-list';
import Nav from './nav';
import CreateEntry from './create-entry';
import EventDetails from './event-details';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'createEntry'
      },
      entries: []
      // message: null,
      // isLoading: true
      // createdEntry: {};
    };
    this.addEntry = this.addEntry.bind(this);
  }

  componentDidMount() {
    // fetch('/api/health-check')
    //   .then(res => res.json())
    //   .then(data => this.setState({ message: data.message || data.error }))
    //   .catch(err => this.setState({ message: err.message }))
    //   .finally(() => this.setState({ isLoading: false }));
  }

  // way to get the data from the the entry form
  addEntry(entry) {
    const reqOptions = {
      method: 'POST',
      body: JSON.stringify(entry),
      headers: { 'Content-Type': 'application/json' }
    };
    fetch('/api/entries', reqOptions)
      .then(result => result.json())
      .then(result => {
        const updatedEntries = this.state.entries.slice();
        updatedEntries.push(result);
        this.setState({ entries: updatedEntries });
      })
      .catch(err => console.error(err));
  }

  setView(name) {
    this.setState({
      view: name
    });
  }

  render() {
    let view = null;
    if (this.state.view.name === 'entries') {
      view = <EntryList />;
    } else if (this.state.view.name === 'createEntry') {
      view = <CreateEntry setView={this.setView}/>;
    } else if (this.state.view.name === 'eventDetails') {
      view = <EventDetails setView={this.setView}/>;
    }

    return (
      <>
        <Header />
        {view}
        <Nav setView={this.setView}/>
      </>
    );
  }
}
