/* eslint-disable react/prop-types */

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { NoteForm } from './components/NoteForm.jsx'
import { NoteList } from './components/NoteList.jsx'
import { VisiblityFilter } from './components/VisiblityFilter.jsx'
import { initializeNotes } from './reducers/noteReducer.js'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeNotes())
  }, [dispatch])

  return (
    <>
      <NoteForm />
      <VisiblityFilter />
      <NoteList />
    </>
  )
}

export default App
