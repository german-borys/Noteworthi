import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { addNote } from '../actions'

const mapStateToProps = ({ addingNote }, { match }) => ({  addingNote, match  })

const mapDispatchToProps = dispatch => ({
  addNote: note => dispatch(addNote(note))
})

class NewNoteModal extends Component {
  constructor(props) {
    super(props)
    console.log('new note modal props', this.props)
    this.handleAddNote = this.handleAddNote.bind(this)
  }

  componentDidMount() {
    if (this.noteContent) this.noteContent.focus()
  }

  handleAddNote(e) {
    this.props.addNote({ title: this.noteTitle.value, content: this.noteContent.value })
    this.props.history.goBack()
  }

  render() {
    const { addingNote, addNote, hideAddNote } = this.props

    return (
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
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewNoteModal))
