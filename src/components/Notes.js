import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Note from './Note'
import { connect } from 'react-redux'

const mapStateToProps = ({ notes }) => ({ notes })

class Notes extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { notes } = this.props
    return (
      <div className="content">
      {
        notes.map((note, key) =>
          <Note key={key} content={note.content} />
        )
      }
      </div>
    )
  }

}

export default connect(mapStateToProps)(Notes)
