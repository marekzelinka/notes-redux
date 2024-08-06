/* eslint-disable react/prop-types */

import { NoteForm } from './components/NoteForm.jsx'
import { NoteList } from './components/NoteList.jsx'
import { VisiblityFilter } from './components/VisiblityFilter.jsx'

function App() {
  return (
    <>
      <NoteForm />
      <VisiblityFilter />
      <NoteList />
    </>
  )
}

export default App
