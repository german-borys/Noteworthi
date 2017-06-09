export const addNote = content => ({ type: 'ADD_NOTE', data: { content: content } })
export const showAddNote = () => ({ type: 'SHOW_ADD_NOTE' })
export const hideAddNote = () => ({ type: 'HIDE_ADD_NOTE' })
