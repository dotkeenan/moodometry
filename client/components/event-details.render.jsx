import React from 'react';

function EventDetailsRender(props) {
  function handleAddEvent() {
    props.setPhase('addEvent');
  }
  function handleAddParticipants() {
    props.setPhase('addParticipants');
  }
  function handleAddNote() {
    props.setPhase('addNote');
  }
  return (
    <div className="container">
      <div className="row date-and-mood">
        <h1 className="h1-form">What&apos;s up?</h1>

        <div className="container add-field-container-start">
          <div className="row add-field">
            <img className="hover-pointer" onClick={handleAddEvent} src="/images/ui-icons/add-detail.svg" alt="add detail" />
            <span className="add-field-text hover-pointer" onClick={handleAddEvent}>Add an event</span>
          </div>
          <div className="row add-field">
            <img className="hover-pointer" onClick={handleAddParticipants} src="/images/ui-icons/add-detail.svg" alt="add detail" />
            <span className="add-field-text hover-pointer" onClick={handleAddParticipants}>Add Participants</span>
          </div>
          <div className="row add-field">
            <img className="hover-pointer" onClick={handleAddNote} src="/images/ui-icons/add-detail.svg" alt="add detail" />
            <span className="add-field-text hover-pointer" onClick={handleAddNote}>Add a note</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetailsRender;
