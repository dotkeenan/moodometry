import React from 'react';
import Events from './events';

function AddEventRender(props) {
  return (
    <div className="container">
      <div className=" date-and-mood justify-content-center">
        <h1 className="h1-form">Any events?</h1>

        <div className="add-field-container">
          <div className="add-field">
            <Events setEventState={props.setEventState} setEventsUrls={props.setEventsUrls} setEventUrlAndLabel={props.setEventUrlAndLabel} handleAddParticipants={props.handleAddParticipants}/>
          </div>
          <div className="add-field">
            <img className="hover-pointer" onClick={props.handleAddParticipants} src="/images/ui-icons/add-detail.svg" alt="add detail" />
            <span className="selected-participants hover-pointer" onClick={props.handleAddParticipants}>{props.entryState.participants}</span>
            {/* <span className="selected-participants">Add Participants</span> */}
          </div>
          <div className="add-field">
            <img className="hover-pointer" onClick={props.handleAddNote} src="/images/ui-icons/add-detail.svg" alt="add detail" />
            <span className="selected-participants hover-pointer" onClick={props.handleAddNote}>{props.entryState.note}</span>
            {/* <span className="selected-participants">Add a note</span> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddEventRender;
