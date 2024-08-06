/* eslint-disable react/prop-types */

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { NoteForm } from './components/NoteForm.jsx'
import { NoteList } from './components/NoteList.jsx'
import { VisiblityFilter } from './components/VisiblityFilter.jsx'
import { setNotes } from './reducers/noteReducer.js'
import { getAllNotes } from './services/notes.js'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    getAllNotes().then((notes) => dispatch(setNotes(notes)))
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
