import React from 'react';

function Headers(props) {

  function displayModal() {
    props.displayModal();
  }

  return (
    <div className='nav-container header'>
      <div className="arrow-container">
        <img src="images/ui-icons/back-arrow.svg" alt="back arrow" />
      </div>
      <div className="title-container">
        <h1 className="nav-title">{props.headerLabel}</h1>
      </div>
      <div onClick={displayModal} className="burger-container">
        <img src="images/ui-icons/burger-icon.svg" alt="burger menu" />
      </div>
    </div>);

}

export default Headers;
