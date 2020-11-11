import React from 'react';
import EntryListItem from './entry-list-item';

class EntryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: ['fdjsklfj']
    };
  }

  // componentDidMount() {
  //   this.getEntry();
  // }

  // getEntry() {
  //   fetch('api/entries')
  //     .then(result => result.json())
  //     .then(entry => {
  //       this.setState({ todos: entry });
  //     });
  // }

  // createEntry() {

  // }

  render() {
    var entryItems = this.state.entries;
    var listEntry = entryItems.map(entry => <EntryListItem key={entry.entryId} value={this.state.entries} />);

    return (
      <div>
        <div>
          {listEntry}
        </div>
      </div>
    );
  }

}

export default EntryList;
