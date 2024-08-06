import { createSlice } from '@reduxjs/toolkit'
import { createNote, getAllNotes, updateNote } from '../services/notes.js'

const noteSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    appendNote: (state, action) => {
      state.push(action.payload)
    },
    setNote: (state, action) => {
      return state.map((note) =>
        note.id !== action.payload.id ? note : action.payload,
      )
    },
    setNotes: (_state, action) => {
      return action.payload
    },
  },
})

export const {
  reducer: noteReducer,
  actions: { appendNote, setNote, setNotes },
} = noteSlice

export function initializeNotes() {
  return async (dispatch) => {
    const notes = await getAllNotes()
    dispatch(setNotes(notes))
  }
}

export function addNote(content) {
  return async (dispatch) => {
    const note = await createNote(content)
    dispatch(appendNote(note))
  }
}

export function toggleNoteImportance(id) {
  return async (dispatch, getState) => {
    const { notes } = getState()

    const note = notes.find((note) => note.id === id)
    const updatedNote = await updateNote(note.id, {
      ...note,
      important: !note.important,
    })
    dispatch(setNote(updatedNote))
  }
}
