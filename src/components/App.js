import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import TopToolbar from './TopToolbar'
import Dashboard from './Dashboard'
import NewNoteModal from './NewNoteModal'
import Notes from './Notes'
import NoteContainer from './NoteContainer'

import { addNote, showAddNote, hideAddNote } from '../actions'

const mapStateToProps = ({ notes, addingNote }, { match }) => ({
  notes,
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
    const { notes, match, showAddNote } = this.props
    return (
      <div className="main-wrapper">
        <Notes notes={notes}/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
