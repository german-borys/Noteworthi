import uuidv4 from 'uuid/v4'

export const addingNote = (state, action) => {
  switch (action.type) {
    case 'SHOW_ADD_NOTE': return true
    case 'HIDE_ADD_NOTE': return false
    default: return !!state
  }
}

export const notes = (state, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      let newNote = Object.assign({}, action.data, {
        id: uuidv4()
      })
      return state.concat([newNote])
    default:
      return state || []
  }
}
