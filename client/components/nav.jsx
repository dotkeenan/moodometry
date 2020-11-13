import React from 'react';

// possibly convert into a class since there will be lots of methods
function Nav(props) {
  function handleAddClick(e) {
    props.setView('createEntry');
    // props.setPhase('');
  }

  function handleHomeClick(e) {
    // possibly reset everything in the state when home is clicked.
    props.setView('entries');
  }
  return (
    <React.Fragment>
      <div className="footer">
        <div className="nav nav-row">


        <div>
          <img onClick={handleHomeClick} src="/images/ui-icons/home.svg" alt="home" />
        </div>

          <div>
            <img src="/images/ui-icons/stats.svg" alt="stats" />
          </div>

          <div onClick={handleAddClick} className="add-entry-button">
            <div className="button-icon">
              <img src="/images/ui-icons/add.svg" alt="add" />
            </div>
          </div>

          <div>
            <img src="/images/ui-icons/calendar.svg" alt="calendar" />
          </div>

          <div>
            <img src="/images/ui-icons/logout.svg" alt="logout" />
          </div>

        </div>
      </div>
    </React.Fragment>
  );
}

export default Nav;
