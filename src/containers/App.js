import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/bookActions';
import Books from '../components/Books';

class App extends Component {
  componentDidMount() {
    this.props.actions.fetchBooks()
  } 

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to YouShouldRead</h2>
        </div>
        <p className="App-intro">
        </p>
        <Books books={this.props.books} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    books: state.books
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App);
