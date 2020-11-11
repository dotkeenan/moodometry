import React from 'react';

function Nav() {
  return (
    <div className="nav nav-row">

      <div>
        <img src="/images/ui-icons/home.svg" alt="home"/>
      </div>

      <div>
        <img src="/images/ui-icons/stats.svg" alt="stats" />
      </div>

      <div className="add-entry-button">
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
  );
}

export default Nav;
