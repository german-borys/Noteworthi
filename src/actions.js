export const addNote = note => ({ type: 'ADD_NOTE', data: { content: note.content, title: note.title }})
export const deleteNote = noteId => ({ type: 'DELETE_NOTE', data: noteId })

export const showAddNote = () => ({ type: 'SHOW_ADD_NOTE' })
export const hideAddNote = () => ({ type: 'HIDE_ADD_NOTE' })
