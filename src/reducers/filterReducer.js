import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'filter',
  initialState: 'ALL',
  reducers: {
    setFilter: (_state, action) => {
      return action.payload
    },
  },
})

export const {
  reducer: filterReducer,
  actions: { setFilter },
} = filterSlice
