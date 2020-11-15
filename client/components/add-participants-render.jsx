import React from 'react';
import Participants from './participants';

function AddParticipantsRender(props) {
  function handleAddEvent() {
    props.setPhase('addEvent');
  }
  function handleAddNote() {
    props.setPhase('addNote');
  }

  function createEventIcons() {
    if (!props.eventsUrls) {
      return <span className="selected-participants hover-pointer" onClick={handleAddEvent}>Add an Event</span>;
    } else {
      return (
        <span className="selected-event-span">
          <img className="selected-event hover-pointer" onClick={handleAddEvent} src={props.eventsUrls} alt={props.eventsLabel}/>
          <span className="selected-event-text" onClick={handleAddEvent}>{props.eventsLabel}</span>
        </span>
      );
    }
  }

  return (
    <div className="container">
      <div className="row date-and-mood">
        <h1 className="h1-form">What&apos;s up?</h1>

        <div className="container add-field-container">
          <div className="add-field">
            <img className="hover-pointer" onClick={handleAddEvent} src="/images/ui-icons/add-detail.svg" alt="add detail" />
            {createEventIcons()}
          </div>
          <div className="add-field">
            <Participants setParticipantState={props.setParticipantState} setPhase={props.setPhase}/>
          </div>
          <div className="add-field">
            <img className="hover-pointer" onClick={handleAddNote} src="/images/ui-icons/add-detail.svg" alt="add detail" />
            {/* <span className="selected-participants">Add a note</span> */}
            <span className="selected-participants hover-pointer" onClick={handleAddNote}>{props.entryState.note}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddParticipantsRender;
// back up
// import React from 'react';
// import Participants from './participants';

// function AddParticipantsRender(props) {
//   console.log('entryState on participants', props.entryState);
//   return (
//     <div className="container">
//       <div className="row date-and-mood">
//         <h1 className="h1-form">What&apos;s up?</h1>

//         <div className="container add-field-container">
//           <div className="row add-field">
//             <img onClick={props.handleAddEvent} src="/images/ui-icons/add-detail.svg" alt="add detail" />
//             <span className="add-field-text">Add an event</span>
//           </div>
//           <div className="row add-field">
//             <Participants setParticipantState={props.setParticipantState} />
//           </div>
//           <div className="row add-field">
//             <img onClick={props.handleAddNote} src="/images/ui-icons/add-detail.svg" alt="add detail" />
//             <span className="add-field-text">Add a note</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AddParticipantsRender;
