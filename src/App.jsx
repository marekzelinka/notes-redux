/* eslint-disable react/prop-types */

function App({ store }) {
  const notes = store.getState()

  return (
    <>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            {note.content} {note.important ? <strong>important</strong> : null}
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
