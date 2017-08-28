import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/bookActions';
import Books from '../components/Books';
import Home from '../components/Home';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import BookForm from '../containers/BookForm';
import NextRead from '../containers/NextRead'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
require('../css/styles.css');

injectTapEventPlugin();

class App extends Component {
  componentDidMount() {
    this.props.actions.fetchBooks()
  } 

  render() {
  
    return (
      <MuiThemeProvider>
        <div className="container">
          <div className="App-header">
            <h2>Welcome to YouShouldRead</h2>
          </div>
          <Router>
            <div>
              <ul className="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/new">Add a Book</Link></li>
                <li><Link to="/nextread">Get your next book</Link></li>
                <li><Link to="/books">All Books</Link></li>
              </ul>

              <Route exact path="/" component={Home}/>
              <Route path="/new" component={BookForm}/>
              <Route path="/nextread" component={NextRead}/> 
              <Route path="/books" render={props => <Books books={this.props.books} />}/>
            </div>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

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
