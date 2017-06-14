import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'

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

const NoteLink = (props) => {
  return (
    <Link to={`notes/${props.note.id}`}>
      <div className="item">
        <div className="content">
          <div className="header">{props.note.title}</div>
          <div className="description">Created </div>
        </div>
      </div>
    </Link>
  )
}

export default Notes
