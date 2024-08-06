import React from 'react'
import ReactDOM from 'react-dom/client'
import { legacy_createStore as createStore } from 'redux'
import App from './App.jsx'
import { noteReducer } from './reducer.js'

const store = createStore(noteReducer)

store.dispatch({
  type: 'NEW_NOTE',
  payload: {
    content: 'the app state is in redux store',
    important: true,
    id: 1,
  },
})
store.dispatch({
  type: 'NEW_NOTE',
  payload: {
    content: 'state changes are made with actions',
    important: false,
    id: 2,
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'))
const render = () =>
  root.render(
    <React.StrictMode>
      <App store={store} />
    </React.StrictMode>,
  )

render()
store.subscribe(render)
