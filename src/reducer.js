export function noteReducer(state = [], action) {
  switch (action.type) {
    case 'NEW_NOTE': {
      return state.concat(action.payload)
    }
    case 'TOGGLE_IMPORTANCE': {
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

export function toggleImportance(id) {
  return {
    type: 'TOGGLE_IMPORTANCE',
    payload: {
      id,
    },
  }
}

function generateId() {
  return Math.floor(Math.random() * 1_000_000)
}
