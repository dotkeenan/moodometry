import React from 'react';
import EntryListItem from './entry-list-item';

class EntryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: ['fdjsklfj']
    };
    this.getEntries = this.getEntries.bind(this);
    this.createEntries = this.createEntries.bind(this);
  }

  componentDidMount() {
    this.getEntries();
  }

  getEntries() {
    fetch('api/entries')
      .then(result => result.json())
      .then(entries => {
        this.setState({ todos: entries });
      });
  }

  createEntries() {
    const entryList = this.state.entries.map(entry => {
      return (
        <EntryListItem
          key = {entry.entryId}
          entry = {this.state.entries}
        />
      );
    });
    return entryList;
  }

  render() {
    // var entryItems = this.state.entries;
    // var listEntry = entryItems.map(entry => <EntryListItem key={entry.entryId} value={this.state.entries} />);
    const renderEntries = this.createEntries();
    return (
      <div>
        {renderEntries}
      </div>
    );
  }

}

export default EntryList;
