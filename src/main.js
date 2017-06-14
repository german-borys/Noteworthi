import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { Route } from 'react-router'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import * as reducers from './reducers'

import App from './components/App'
import Dashboard from './components/Dashboard'
import Notes from './components/Notes'
import NoteContainer from './components/NoteContainer'
import NewNoteModal from './components/NewNoteModal'
import TopicNotes from './components/TopicNotes'
import TopToolbar from './components/TopToolbar'

const history = createHistory()
const middleware = routerMiddleware(history)
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware)
)

function run() {
  let state = store.getState()
  console.log('state',state)

  ReactDOM.render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Route exact path="/" component={App} />
            <Route path="/topics/:topicName" component={TopicNotes} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/notes/:noteId" component={NoteContainer} />
            <Route path="/new" component={NewNoteModal} />
          </div>
        </ConnectedRouter>
      </Provider>
    , document.getElementById('root'))
}

run()

store.subscribe(run)
