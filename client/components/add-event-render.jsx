import React from 'react';
import Events from './events';

function AddEventRender(props) {
  function handleAddParticipants() {
    props.setView('addParticipants');
  }
  function handleAddNote() {
    props.setView('addNote');
  }

  return (
    <div className="container">
      <div className=" date-and-mood justify-content-center">
        <h1 className="h1-form">Any events?</h1>

        <div className="add-field-container">
          <div className="add-field">
            <Events
              setEventState={props.setEventState}
              setEventUrlAndLabel={props.setEventUrlAndLabel}
              setView={props.setView}
            />
          </div>
          <div className="add-field row form-margin-fix">
            <img className="hover-pointer" onClick={handleAddParticipants} src="/images/ui-icons/add-detail.svg" alt="add detail" />
            <span className="selected-participants hover-pointer margin-left-10" onClick={handleAddParticipants}>{props.entryState.participants}</span>
          </div>
          <div className="add-field row form-margin-fix">
            <img className="hover-pointer" onClick={handleAddNote} src="/images/ui-icons/add-detail.svg" alt="add detail" />
            <span className="selected-participants hover-pointer margin-left-10" onClick={handleAddNote}>{props.entryState.note}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddEventRender;
