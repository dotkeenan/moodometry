import React from 'react';

function Events(props) {
  return (
    <React.Fragment>
      <div className="event-container">
        <div className="hobbie-container">
          <h6>Hobbies</h6>
          <div className="hobbie-icon">
            <img className="svg-icons" src="images/events/drum-solid.svg" alt="drum-solid"></img>
            <img className="svg-icons" src="images/events/gamepad-solid.svg" alt="gamepad-solid"></img>
            <img className="svg-icons" src="images/events/snowboarding-solid.svg" alt="snowboarding-solid"></img>
            <img className="svg-icons" src="images/events/laptop-code-solid.svg" alt="laptop-code-solid"></img>
          </div>
        </div>
        <div className="social-container">
          <h6>Social</h6>
          <div className="social-icon">
            <img className="svg-icons" src="images/events/coffee-solid.svg" alt="coffee-solid"></img>
            <img className="svg-icons" src="images/events/flask-solid.svg" alt="flask-solid"></img>
            <img className="svg-icons" src="images/events/glass-cheers-solid.svg" alt="glass-cheers-solid"></img>
            <img className="svg-icons" src="images/events/pencil-alt-solid.svg" alt="pencil-alt-solid"></img>
          </div>
        </div>
        <div className="check-container">
          <svg className="check-button" width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.5 41.6562C32.632 41.6562 41.6562 32.632 41.6562 21.5C41.6562 10.368 32.632 1.34375 21.5 1.34375C10.368 1.34375 1.34375 10.368 1.34375 21.5C1.34375 32.632 10.368 41.6562 21.5 41.6562Z" fill="#67D4D2"/>
            <path d="M30.9062 9.40625L16.7969 23.9187L12.0938 19.0812L7.39062 23.9187L16.7969 33.5938L35.6094 14.2438L30.9062 9.40625Z" fill="white"/>
          </svg>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Events;
