import React from 'react';
import Notes from './notes';

function AddNoteRender(props) {
  return (
    <div className="container">
      <div className="row date-and-mood">
        <h1 className="h1-form">With who?</h1>

        <div className="container add-field-container">
          <div className="row add-field">
            <img onClick={props.handleAddEvent} src="/images/ui-icons/add-detail.svg" alt="add detail" />
            <span className="add-field-text">Add an event</span>
          </div>
          <div className="row add-field">
            <img onClick={props.handleAddParticipants} src="/images/ui-icons/add-detail.svg" alt="add detail" />
            <span className="add-field-text">Add Participants</span>
          </div>
          <div className="row add-field">
            <Notes setNoteState={props.setNoteState} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNoteRender;
