import React from 'react';
import Header from './header.jsx';
import EntryList from './entry-list.jsx';
import Nav from './nav.jsx';
import Journal from './journal';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'Journal'
      }
      // message: null,
      // isLoading: true
    };
  }

  componentDidMount() {
    // fetch('/api/health-check')
    //   .then(res => res.json())
    //   .then(data => this.setState({ message: data.message || data.error }))
    //   .catch(err => this.setState({ message: err.message }))
    //   .finally(() => this.setState({ isLoading: false }));
  }

  setView() {

  }

  render() {
    const displayName = this.state.view.name;
    let display;

    if (displayName === 'Journal') {
      display = <Journal setView={this.setView}/>;
    } else if (displayName === 'home') {
      display = <EntryList addToCart={this.addToCart} productId={this.state.view.params} setView={this.setView}/>;
    } else {
      display = <p>Nothing to display</p>;
    }

    return (
      <React.Fragment>
        <Header name={this.state.view.name} />
        <div className="entry-list">
          <div className="container entry-container">
            <div className="row entry-row">
              {display}
            </div>
          </div>
        </div>
        <Nav />
      </React.Fragment>
    );
  }
}
