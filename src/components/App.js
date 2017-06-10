import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import TopToolbar from './TopToolbar'
import Dashboard from './Dashboard'
import NewNoteModal from './NewNoteModal'
import Notes from './Notes'

import { addNote, showAddNote, hideAddNote } from '../actions'

const mapStateToProps = ({ addingNote }, { match }) => ({
  addingNote,
  match
})

const mapDispatchToProps = dispatch => ({
  addNote: content => dispatch(addNote(content)),
  showAddNote: () => dispatch(showAddNote()),
  hideAddNote: () => dispatch(hideAddNote())
})

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log('App props', this.props)
    const { match, showAddNote } = this.props
    return (
      <div className="main-wrapper">
        <TopToolbar showAddNote={showAddNote}/>
        <NewNoteModal />
        <Notes />
        <Route path={`${match.url}/dashboard`} component={Dashboard}/>
        <Route path={`${match.url}/new`} component={NewNoteModal}/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
