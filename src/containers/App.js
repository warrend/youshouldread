import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/bookActions';
import Books from '../components/Books';
import Home from '../components/Home';
import Contact from '../components/Contact';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import BookForm from '../containers/BookForm';
import NextRead from '../containers/NextRead';
import {
  BrowserRouter as Router,
  Route, NavLink
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
          <Router>
            <div>
              <ul className="menu">
                <li><h3 className="intro-text">YouShouldRead</h3></li>
                <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/new" exact activeClassName="active">Add a Book</NavLink></li>
                <li><NavLink to="/nextread" exact activeClassName="active">Get your next book</NavLink></li>
                <li><NavLink to="/books" exact activeClassName="active">All Books</NavLink></li>
                <li><NavLink to="/contact" exact activeClassName="active">Contact</NavLink></li>
              </ul>

              <Route exact path="/" component={Home}/>
              <Route path="/new" component={BookForm}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/nextread" component={NextRead}/> 
              <Route path="/books" render={props => <Books books={this.props.books} />}/>
            </div>
          </Router>
        </div>
      </MuiThemeProvider>
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
