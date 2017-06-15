import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'

import timeConverter from '../helper-functions/dateFunctions'

const Notes = (props) => {
    const { notes } = props

    return (
      <div className="content">
        <div className="ui relaxed divided list">
          {
            notes.map((note, key) =>
              <NoteLink key={key} note={note} />
            )
          }
        </div>
      </div>
    )
}

class NoteLink extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    const {title, created} = this.props.note
    return (
      <div onMouseEnter={this.props.handleHover} className="item">
        <Link to={`notes/${this.props.note.id}`}>
          <div className="content">
            <div className="header">{title}</div>
            <div className="description">Created: {timeConverter(created)}</div>
          </div>
        </Link>
      </div>
    )
  }
}

export default Notes
