import { configureStore } from '@reduxjs/toolkit'
import { filterReducer } from './reducers/filterReducer'
import { noteReducer } from './reducers/noteReducer'

export const store = configureStore({
  reducer: {
    notes: noteReducer,
    filter: filterReducer,
  },
})
