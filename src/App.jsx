/* eslint-disable react/prop-types */

import { newNote, toggleImportance } from './reducer'

function App({ store }) {
  const notes = store.getState()

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault()

          const form = event.target
          const formData = new FormData(form)

          const content = formData.get('content')?.toString()
          store.dispatch(newNote(content))

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
            <button onClick={() => store.dispatch(toggleImportance(note.id))}>
              {note.important ? 'make not important' : 'make important'}
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
