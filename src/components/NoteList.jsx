/* eslint-disable react/prop-types */

import { useDispatch, useSelector } from 'react-redux'
import { toggleImportance } from '../reducer.js'

export function NoteList() {
  const notes = useSelector((state) => state)

  return (
    <ul>
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </ul>
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

  function handleClick() {
    dispatch(toggleImportance(note.id))
  }

  return <button onClick={handleClick}>{label}</button>
}
