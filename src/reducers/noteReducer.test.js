import deepFreeze from 'deep-freeze'
import { describe, expect, test } from 'vitest'
import { noteReducer } from './noteReducer.js'

describe('noteReducer', () => {
  test('returns new state with action notes/newNote', () => {
    const state = []
    deepFreeze(state)
    const action = {
      type: 'notes/newNote',
      payload: 'state changes are made with actions',
    }

    const newState = noteReducer(state, action)
    expect(newState).toHaveLength(1)
    expect(newState.map((note) => note.content)).toContainEqual(action.payload)
  })

  test('returns new state with action notes/toggleNoteImportance', () => {
    const state = [
      {
        content: 'the app state is in redux store',
        important: true,
        id: 1,
      },
      {
        content: 'state changes are made with actions',
        important: true,
        id: 2,
      },
    ]
    deepFreeze(state)
    const action = {
      type: 'notes/toggleNoteImportance',
      payload: 2,
    }

    const newState = noteReducer(state, action)
    expect(newState).toHaveLength(2)
    expect(newState).toContainEqual(state[0])
    expect(newState).toContainEqual({
      content: 'state changes are made with actions',
      important: false,
      id: 2,
    })
  })
})
