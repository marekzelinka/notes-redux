/* eslint-disable react/prop-types */

import { useDispatch, useSelector } from 'react-redux'
import { toggleNoteImportance } from '../reducers/noteReducer.js'

export function NoteList() {
  const notes = useSelector(({ notes, filter }) => {
    if (filter === 'ALL') {
      return notes
    }

    return notes.filter((note) =>
      filter === 'IMPORTANT' ? note.important : !note.important,
    )
  })

  return notes.length ? (
    <ul>
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </ul>
  ) : (
    <em>No notes for selected filter</em>
  )
}

function NoteItem({ note }) {
  return (
    <li key={note.id}>
      {note.content} <ToggleNoteImportance note={note} />
    </li>
  )
}

function ToggleNoteImportance({ note }) {
  const dispatch = useDispatch()

  const label = note.important ? 'make not important' : 'make important'

  async function handleClick() {
    dispatch(toggleNoteImportance(note.id))
  }

  return <button onClick={handleClick}>{label}</button>
}
