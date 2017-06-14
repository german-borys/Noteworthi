import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactDOM from 'react-dom'

const mapStateToProps = ({ notes }, { match }) => ({
  notes,
  match
})

class NoteContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      note: {}
    }
  }
  componentDidMount() {
    let note = this.props.notes.filter((n) => n.id === this.props.match.params.noteId)[0]
    if (note) this.setState({ note })
  }

  render() {

    console.log('note', this.state)
    return (
      <div className="ui card">
        <div className="content">
          <div className="header">Note header</div>
          <div className="description">
            { this.state.note.content }
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(NoteContainer)
