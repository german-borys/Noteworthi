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

class NewNoteModal extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    console.log('new note container mounted')
  }

  handleClick(e) {
    const { showAddNote } = this.props
    showAddNote()
  }

  render() {
    const { addingNote, addNote, hideAddNote } = this.props

    return (
        <div>
        {addingNote &&
          <NewNote
            addNote={addNote}
            hideAddNote={hideAddNote}
          />}
        </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewNoteModal)
