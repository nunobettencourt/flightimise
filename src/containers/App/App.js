import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetch_flights, create_session } from '../../store/flights/actions';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentWillMount() {
    const params = new URLSearchParams()
          params.append('inboundDate', '2019-02-25');
          params.append('cabinClass', 'business');
          params.append('children',0);
          params.append('infants',0);
          params.append('groupPricing',false);
          params.append('country','US');
          params.append('currency','USD');
          params.append('locale','en-US');
          params.append('originPlace','SFO-sky');
          params.append('destinationPlace','LHR-sky');
          params.append('outboundDate','2019-02-20');
          params.append('adults',1);

    this.props.create_session(params);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

function mapStateToProps({flights}) {
  return { flights }
};

export default connect(mapStateToProps, {fetch_flights, create_session})(App);
