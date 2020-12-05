import React from 'react';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
    this.handleStartClick = this.handleStartClick.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  handleStartClick() {
    this.props.setView('entries');
    this.props.setHeaderLabel('Entries');
  }

  render() {
    if (this.state.isLoading) {
      return <h1>loading</h1>;
    } else {

      return (
        <>
          <div className="home-overlay"></div>
          <div className="homepage-container">
            <div className="d-flex flex-column homepage-elements align-items-center">
              <div className="logo-container d-flex justify-content-center">
                <div className="logo-background row justify-content-center logo-animate logo-animate-spin">
                  <img src="/images/photos/logo-letter.svg" alt="logo letter"/>
                </div>
              </div>
              <div className="d-flex justify-content-center app-name-container">
                <h1 className="text-light heading-content-animation">Moodometry</h1>
              </div>
              <div className="d-flex justify-content-center start-button-container button-content-animation">
                <div>
                  <button onClick={this.handleStartClick} className="btn btn-dark start-button">Start</button>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
}

export default HomePage;
