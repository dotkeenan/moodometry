import React from 'react';

class EntryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editDropdown: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.deleteEntry = this.deleteEntry.bind(this);
    this.editEntry = this.editEntry.bind(this);
  }

  handleClick() {
    this.setState({
      editDropdown: !this.state.editDropdown
    });
  }

  deleteEntry() {
    var entryId = this.props.entry.entryId;
    fetch('/api/entries/' + entryId, {
      method: 'delete'
    })
      .then(result => {
        this.setState({ editDropdown: false });
        this.props.getEntries();
        this.props.createEntries();
      })
      .catch(err => console.error(err));
  }

  editEntry() {

  }

  render() {
    return (
      <div className="card-container">
        { this.state.editDropdown
          ? <div className="container d-flex justify-content-end">
            <button onClick={this.editEntry} className="button-styling-remove">
              <div className="dropdown mt-2 mb-2">
                <img src="images/ui-icons/edit-regular.svg" alt="menu" />
              </div>
            </button>
            <button onClick={this.deleteEntry} className="button-styling-remove">
              <div className="dropdown mt-2 mb-2">
                <img src="images/ui-icons/trash-alt-regular.svg" alt="menu" />
              </div>
            </button>
          </div>
          : <div className="menu-container">
            <button onClick={this.handleClick} className="button-styling-remove">
              <img src="images/ui-icons/menu-icon.svg" alt="menu" />
            </button>
          </div>
        }
        <div className="info-container">
          <div className="image-container">
            <div className="image-icon">
              <img
                className="entry-list-item-mood"
                src={this.props.entry.imageUrl}
                alt={this.props.entry.mood} />
            </div>
          </div>
          <div className="note-container">
            <h3 className="entry-list-time">
              {this.props.entry.date}
              <span className="entry-hour">{this.props.entry.hour}</span>
            </h3>
            <div className="event-partic-container">
              <p className="event-with">{this.props.entry.event}</p>
              <p className="event-with">{this.props.entry.participants}</p>
            </div>
            <p>{this.props.entry.note}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default EntryListItem;
