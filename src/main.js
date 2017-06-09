import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import * as reducers from './reducers'
import App from './components/App'
import Notes from './components/Notes'
import NewNoteContainer from './components/NewNoteContainer'
import TopToolbar from './components/TopToolbar'

const store = createStore(combineReducers(reducers))

function run() {
  let state = store.getState()

  console.log('state',state)
  ReactDOM.render(<Provider store={store}>
      <App>
      <TopToolbar />
      <NewNoteContainer />
      <Notes />
      </App>
    </Provider>, document.getElementById('root'))
}

run()

store.subscribe(run)
