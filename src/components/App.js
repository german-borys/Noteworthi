import React from 'react'
import ReactDOM from 'react-dom'

import { Route } from 'react-router-dom'

import TopToolbar from './TopToolbar'
import NewNoteContainer from './NewNoteContainer'
import Notes from './Notes'

const App = ({ match }) => {
  return (
    <div className='root'>
      <TopToolbar />
      <NewNoteContainer />
      <Notes />
      <Route path={`${match.url}/new`} component={NewNoteContainer}/>
    </div>
  )
}

export default App
