import React from 'react';
import Events from './events';

function AddEventRender(props) {
  return (
    <div className="container">
      <div className="row date-and-mood">
        <h1 className="h1-form">Any events?</h1>

        <div className="container add-field-container">
          <div className="row add-field">
            <Events setEventState={props.setEventState} setEventsUrls={props.setEventsUrls} setEventUrlAndLabel={props.setEventUrlAndLabel} handleAddParticipants={props.handleAddParticipants}/>
          </div>
          <div className="row add-field">
            <img onClick={props.handleAddParticipants} src="/images/ui-icons/add-detail.svg" alt="add detail" />
            <span className="add-field-text">Add Participants</span>
          </div>
          <div className="row add-field">
            <img onClick={props.handleAddNote} src="/images/ui-icons/add-detail.svg" alt="add detail" />
            <span className="add-field-text">Add a note</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddEventRender;
