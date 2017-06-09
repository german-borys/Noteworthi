import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class NewNote extends Component {
  constructor(props) {
    super(props)
    this.handleAddNote = this.handleAddNote.bind(this)
  }

  componentDidMount() {
    let el = ReactDOM.findDOMNode(this.refs.noteContent)
    if (el) el.focus()
  }

  handleAddNote(e) {
    const { addNote, hideAddNote } = this.props
    let content = ReactDOM.findDOMNode(this.refs.noteContent).value
    addNote(content)
    hideAddNote()
  }

  render() {
    return (
      <div>
        <input type="text" ref="noteContent" />
        <button onClick={this.handleAddNote} className="ui basic button">
          Submit
        </button>
      </div>
    )
  }
}

export default NewNote
