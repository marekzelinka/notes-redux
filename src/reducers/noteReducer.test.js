import deepFreeze from 'deep-freeze'
import { describe, expect, test } from 'vitest'
import { noteReducer } from './reducer.js'

describe('noteReducer', () => {
  test('returns new state with action NEW_NOTE', () => {
    const state = []
    deepFreeze(state)
    const action = {
      type: 'NEW_NOTE',
      payload: {
        content: 'state changes are made with actions',
        important: false,
        id: 1,
      },
    }

    const newState = noteReducer(state, action)
    expect(newState).toHaveLength(1)
    expect(newState).toContainEqual(action.payload)
  })

  test('returns new state with action TOGGLE_IMPORTANCE', () => {
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
      type: 'TOGGLE_IMPORTANCE',
      payload: {
        id: 2,
      },
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
