import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import NewNote from './NewNote'
import { addNote, showAddNote, hideAddNote } from '../actions'

const mapStateToProps = ({ addingNote }) => ({  addingNote  })

const mapDispatchToProps = dispatch => ({
  addNote: content => dispatch(addNote(content)),
  showAddNote: () => dispatch(showAddNote()),
  hideAddNote: () => dispatch(hideAddNote())
})

class NewNoteContainer extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    const { showAddNote } = this.props
    showAddNote()
  }

  render() {
    const { addingNote, addNote, hideAddNote } = this.props

    return (
      <div>
        <button onClick={this.handleClick} className="ui basic button">
          <i className="plus icon"></i>
          Add Note
        </button>
        <div>
        {addingNote &&
          <NewNote
            addNote={addNote}
            hideAddNote={hideAddNote}
          />}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewNoteContainer)
