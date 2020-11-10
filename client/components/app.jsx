import React from 'react';
import Header from './header.jsx';
// import EntryList from './entry-list.jsx'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isLoading: true
    };
  }

  componentDidMount() {
    fetch('/api/health-check')
      .then(res => res.json())
      .then(data => this.setState({ message: data.message || data.error }))
      .catch(err => this.setState({ message: err.message }))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    return (
      <div className="entry-list">
        <Header />
        <div className="container entry-container">
          <div className="row entry-row">
            {/* <EntryList /> */}
          </div>
        </div>
      </ div>
    );
  }
}
