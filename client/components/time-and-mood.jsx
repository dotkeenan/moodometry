import React from 'react';
import TimeConverter from './time-converter';

function TimeAndMood(props) {
  function dateRender() {
    if (!props.editMode) {
      return (<span className="date">{TimeConverter(props.entry.time)}</span>);
    } else {
      return (< span className="date" > { props.entry.time }</span >);
    }
  }
  return (
    <React.Fragment>
      <div className="container mt-5">
        <div className="row date-and-mood">
          <h1 className="h1-form">How&apos;s it going?</h1>
          <div className="entry-date-container">
            <div className="date-choice">
              <img src="/images/ui-icons/date-chooser.svg" alt="calendar" />
              {dateRender()}
            </div>
          </div>
        </div>
        <div className="">
          <div className="mood-chooser row">
            {props.createMoods()}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default TimeAndMood;
