import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

import { addNote, hideAddNote } from '../actions'

const mapStateToProps = ({ addingNote }) => ({  addingNote  })

const mapDispatchToProps = dispatch => ({
  addNote: note => dispatch(addNote(note)),
  hideAddNote: () => dispatch(hideAddNote())
})

class NewNoteModal extends Component {
  constructor(props) {
    super(props)
    this.handleAddNote = this.handleAddNote.bind(this)
  }

  componentDidMount() {
    if (this.noteContent) this.noteContent.focus()
  }

  handleAddNote(e) {
    const { addNote, hideAddNote } = this.props
    addNote({ title: this.noteTitle.value, content: this.noteContent.value })
    hideAddNote()
  }

  render() {
    const { addingNote, addNote, hideAddNote } = this.props

    return (
      <div>
        {
          addingNote &&
          <div className=" ui form">
            <div className="field">
              <label>Title</label>
              <input type="text" ref={(input) => this.noteTitle = input} />
            </div>
            <div className="field">
              <label>Content</label>
              <textarea ref={(input) => this.noteContent = input}></textarea>
            </div>
            <button onClick={this.handleAddNote} className="ui basic button">
              Submit
            </button>
          </div>
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewNoteModal)
