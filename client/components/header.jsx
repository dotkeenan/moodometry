import React from 'react';

function Headers(props) {
  return (
    <React.Fragment>
      <div className='nav-container header'>
        <div className="arrow-container">
          <img src="images/ui-icons/back-arrow.svg" alt="back arrow" />
        </div>
        <div className="title-container">
          <h1 className="nav-title">{props.name}</h1>
        </div>
        <div onClick="" className="burger-container">
          <img src="images/ui-icons/burger-icon.svg" alt="burger menu" />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Headers;
