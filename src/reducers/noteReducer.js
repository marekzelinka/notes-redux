import { createSlice, current } from '@reduxjs/toolkit'

const noteSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    addNote: (state, action) => {
      state.push({
        content: action.payload,
        important: false,
        id: generateId(),
      })
    },
    toggleNoteImportance: (state, action) => {
      console.log('current state', current(state))

      return state.map((note) =>
        note.id !== action.payload
          ? note
          : { ...note, important: !note.important },
      )
    },
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
  actions: { addNote, toggleNoteImportance, appendNote, setNote, setNotes },
} = noteSlice

function generateId() {
  return Math.floor(Math.random() * 1_000_000)
}
