/* eslint-disable react/prop-types */

import { useDispatch, useSelector } from 'react-redux'
import { newNote, toggleImportance } from './reducer'

function App() {
  const dispatch = useDispatch()

  const notes = useSelector((state) => state)

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault()

          const form = event.target
          const formData = new FormData(form)

          const content = formData.get('content')?.toString()
          dispatch(newNote(content))

          form.reset()
          form.elements.content?.focus()
        }}
      >
        <input type="text" name="content" id="content" aria-label="New note" />
        <button type="submit">add</button>
      </form>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            {note.content}{' '}
            <button onClick={() => dispatch(toggleImportance(note.id))}>
              {note.important ? 'make not important' : 'make important'}
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
