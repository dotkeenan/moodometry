import React from 'react';

// possibly convert into a class since there will be lots of methods
function Nav(props) {
  function handleAddClick() {
    props.setView('journal');
  }

  function handleHomeClick() {
    props.setView('entries');
  }

  function handleStatsClick() {
    props.setView('stats');
  }


  function handleCalendarClick() {
    props.setView('calendar');
  }
  function handleChangeUserClick() {
    props.setView('homepage');
  }

  return (
    <React.Fragment>
      <div className="footer">
        <div className="nav nav-row">
          <div>
            <img
              onClick={handleHomeClick}
              className="menu-hover"
              src="/images/ui-icons/home.svg"
              alt="home" />
          </div>
          <div>
            <img
              onClick={handleStatsClick}
              className="menu-hover"
              src="/images/ui-icons/stats.svg"
              alt="stats" />
          </div>

          <div onClick={handleAddClick} className="add-entry-button menu-hover">

            <div className="button-icon">
              <img src="/images/ui-icons/add.svg" alt="add" />
            </div>
          </div>

          <div >
            <div>
              <img onClick={handleCalendarClick} className="menu-hover" src="/images/ui-icons/calendar.svg" alt="calendar" />
            </div>

          </div>
          <div>
            <img
              onClick={handleChangeUserClick}
              className="menu-hover"
              src="/images/ui-icons/logout.svg"
              alt="logout" />
          </div>

        </div>
      </div>
    </React.Fragment>
  );
}

export default Nav;
