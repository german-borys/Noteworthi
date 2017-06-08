import { createStore, combineReducers } from 'redux'
import uuidv4 from 'uuid/v4'

const notes = (state, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      let newNote = Object.assign({}, action.data, {
        id: uuidv4()
      })
      return Object.assign({}, state, {
        notes: state.notes ? state.notes.concat([newNote]) : [newNote]
      })
    default:
      return state || {}
  }
}

const store = createStore(combineReducers({
  notes
}))

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch({
  type: 'ADD_NOTE',
  data: {
    content: 'first redux noti'
  }
})
