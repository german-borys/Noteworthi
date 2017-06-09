import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const Note = (props) => {
  const { content } = props

  return (
    <div className="ui card">
      <div className="content">
        <a className="header">Note header</a>
        <div className="description">
          { content }
        </div>
      </div>
    </div>
  )
}

export default Note
