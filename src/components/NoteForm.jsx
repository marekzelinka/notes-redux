import { useDispatch } from 'react-redux'
import { newNote } from '../reducers/noteReducer.js'

export function NoteForm() {
  const dispatch = useDispatch()

  function handleSubmit(event) {
    event.preventDefault()

    const form = event.target
    const formData = new FormData(form)

    const content = formData.get('content')?.toString()
    dispatch(newNote(content))

    handleReset(form)
  }

  function handleReset(form) {
    form.reset()
    form.elements.content?.focus()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="content" id="content" aria-label="New note" />
      <button type="submit">add</button>
    </form>
  )
}
