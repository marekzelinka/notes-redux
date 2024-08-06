const initialState = [
  {
    content: 'reducer defines how redux store works',
    important: true,
    id: 1,
  },
  {
    content: 'state of store can contain any data',
    important: false,
    id: 2,
  },
]

export function noteReducer(state = initialState, action) {
  switch (action.type) {
    case 'NEW_NOTE': {
      return state.concat(action.payload)
    }
    case 'TOGGLE_NOTE_IMPORTANCE': {
      return state.map((note) =>
        note.id === action.payload.id
          ? { ...note, important: !note.important }
          : note,
      )
    }
    default: {
      return state
    }
  }
}

export function newNote(content) {
  return {
    type: 'NEW_NOTE',
    payload: {
      content,
      important: false,
      id: generateId(),
    },
  }
}

export function toggleNoteImportance(id) {
  return {
    type: 'TOGGLE_NOTE_IMPORTANCE',
    payload: {
      id,
    },
  }
}

function generateId() {
  return Math.floor(Math.random() * 1_000_000)
}
