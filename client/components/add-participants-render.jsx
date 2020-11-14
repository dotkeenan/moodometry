import React from 'react';
import Participants from './participants';

function AddParticipantsRender(props) {
  function createEventIcons() {
    return (
      <span className="selected-event-span">
        <img className="selected-event" src={props.eventsUrls} alt={props.eventsLabel}/>
      </span>
    );
  }

  return (
    <div className="container">
      <div className="row date-and-mood">
        <h1 className="h1-form">What&apos;s up?</h1>

        <div className="container add-field-container">
          <div className="row add-field">
            <img onClick={props.handleAddEvent} src="/images/ui-icons/add-detail.svg" alt="add detail" />
            {createEventIcons()}
          </div>
          <div className="row add-field">
            <Participants setParticipantState={props.setParticipantState} />
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
