import { Component } from 'react'

 export default class Sidebar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let props = this.props
    return (
      <div className='sidebar'>
        <h2>Sidebar</h2>
        <ul>
          {props.notes.map((note, key) =>
            <li key={key}>{note.content}</li>
          )}
        </ul>
        { props.addingNote && <input ref='add' /> }
      </div>
    )
  }
}
