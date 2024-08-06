import { createSlice, current } from '@reduxjs/toolkit'

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

const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    newNote: (state, action) => {
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
  },
})

export const {
  reducer: noteReducer,
  actions: { newNote, toggleNoteImportance },
} = noteSlice

function generateId() {
  return Math.floor(Math.random() * 1_000_000)
}
