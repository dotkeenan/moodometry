import React from 'react';

function EntryListItem(props) {
  return (
    <React.Fragment>
      <div className="card-container">
        <div className="menu-container">
          <div className="menu-icon">
            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.75 17.4375C8.82005 17.4375 9.6875 16.5701 9.6875 15.5C9.6875 14.4299 8.82005 13.5625 7.75 13.5625C6.67995 13.5625 5.8125 14.4299 5.8125 15.5C5.8125 16.5701 6.67995 17.4375 7.75 17.4375Z" fill="black"/>
              <path d="M15.5 17.4375C16.5701 17.4375 17.4375 16.5701 17.4375 15.5C17.4375 14.4299 16.5701 13.5625 15.5 13.5625C14.4299 13.5625 13.5625 14.4299 13.5625 15.5C13.5625 16.5701 14.4299 17.4375 15.5 17.4375Z" fill="black"/>
              <path d="M23.25 17.4375C24.3201 17.4375 25.1875 16.5701 25.1875 15.5C25.1875 14.4299 24.3201 13.5625 23.25 13.5625C22.1799 13.5625 21.3125 14.4299 21.3125 15.5C21.3125 16.5701 22.1799 17.4375 23.25 17.4375Z" fill="black"/>
            </svg>
          </div>
        </div>
        <div className="info-container">
          <div className="image-container">
            <div className="image-icon">
              <svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.4618 1.45374C19.5858 1.45374 21.689 1.87693 23.6513 2.69916C25.6135 3.52139 27.3965 4.72655 28.8984 6.24584C30.4003 7.76512 31.5916 9.56877 32.4044 11.5538C33.2172 13.5389 33.6356 15.6664 33.6356 17.815C33.6356 19.9636 33.2172 22.0911 32.4044 24.0762C31.5916 26.0612 30.4003 27.8649 28.8984 29.3842C27.3965 30.9034 25.6135 32.1086 23.6513 32.9308C21.689 33.7531 19.5858 34.1763 17.4618 34.1763C13.1723 34.1763 9.05843 32.4525 6.02527 29.3842C2.9921 26.3158 1.28809 22.1543 1.28809 17.815C1.28809 13.4757 2.9921 9.31417 6.02527 6.24584C9.05843 3.17751 13.1723 1.45374 17.4618 1.45374V1.45374Z" stroke="#FFB800" strokeWidth="2" strokeLinecap="round"/>
                <path d="M10.2736 21.4508C11.1721 24.1777 13.4903 26.9046 17.4619 26.9046C21.4334 26.9046 23.7517 24.1777 24.6502 21.4508" stroke="#FFB800" strokeWidth="2" strokeLinecap="round"/>
                <path d="M10.2736 21.4508C12.0706 22.3598 13.8677 23.2687 17.4619 23.2687C21.0561 23.2687 22.8531 22.3598 24.6502 21.4508" stroke="#FFB800" strokeWidth="2" strokeLinecap="round"/>
                <path d="M12.0706 15.9971C13.0631 15.9971 13.8677 14.7762 13.8677 13.2702C13.8677 11.7642 13.0631 10.5433 12.0706 10.5433C11.0781 10.5433 10.2736 11.7642 10.2736 13.2702C10.2736 14.7762 11.0781 15.9971 12.0706 15.9971Z" fill="#FFB800"/>
                <path d="M22.8531 15.9971C23.8456 15.9971 24.6502 14.7762 24.6502 13.2702C24.6502 11.7642 23.8456 10.5433 22.8531 10.5433C21.8606 10.5433 21.056 11.7642 21.056 13.2702C21.056 14.7762 21.8606 15.9971 22.8531 15.9971Z" fill="#FFB800"/>
              </svg>
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
