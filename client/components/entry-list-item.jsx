import React from 'react';

function EntryListItem(props) {
  return (
    <React.Fragment>
      <div className="card-container">
        <div className="menu-container">
          <div className="menu-icon">
            <img src="images/ui-icons/menu-icon.svg" alt="menu"/>
          </div>
        </div>
        <div className="info-container">
          <div className="image-container">
            <div className="image-icon">
              <img src="images/ui-icons/laugh-beam-regular.svg" alt="laugh beam regular"/>
            </div>
          </div>
          <div className="note-container">
            <h3>{props.entry.time}<span>2:15pm</span></h3>
            <p className="event-with">{props.entry.event}</p>
            <p className="event-with">{props.entry.participants}</p>
            <p>{props.entry.note}</p>

          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default EntryListItem;
