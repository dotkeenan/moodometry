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
            <h3>Fri, Nov 6 | <span>2:15pm</span></h3>
            <p className="event-with">Event: Work + Social</p>
            <p className="event-with">With: Zach & Keenan @ Facebook HQ</p>
            <p> Finished working on a huge assignment with Keenan. Zach treated usto lunch for doing a great job.</p>

          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default EntryListItem;
