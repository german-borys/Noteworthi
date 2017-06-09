import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import * as reducers from './reducers'

import App from './components/App'
import Notes from './components/Notes'
import NewNoteContainer from './components/NewNoteContainer'
import TopicNotes from './components/TopicNotes'
import TopToolbar from './components/TopToolbar'

const store = createStore(combineReducers(reducers))

function run() {
  let state = store.getState()
  console.log('state',state)

  ReactDOM.render(
      <Provider store={store}>
        <Router>
          <div>
            <Route path='/' component={App} />
            <Route path='/topics/:topicName' component={TopicNotes} />
          </div>
        </Router>
      </Provider>
    , document.getElementById('root'))
}

run()

store.subscribe(run)
