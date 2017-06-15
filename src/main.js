import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { Route } from 'react-router'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import * as reducers from './reducers'

import { loadState, saveState } from './localStorage'
import throttle from 'lodash/throttle'

import App from './components/App'
import Dashboard from './components/Dashboard'
import NoteContainer from './components/NoteContainer'
import NewNoteModal from './components/NewNoteModal'
import TopToolbar from './components/TopToolbar'

const history = createHistory()
const middleware = routerMiddleware(history)
const persistedState = loadState()
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }), persistedState,
  applyMiddleware(middleware)
)

store.subscribe(throttle(() => {
  //save any state changes but don't save more than once a sec
  saveState({ notes: store.getState().notes })
}, 1000))

function run() {
  let state = store.getState()
  console.log('state',state)

  ReactDOM.render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <TopToolbar />
            <Route exact path="/" component={App} />
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
