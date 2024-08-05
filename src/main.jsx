import React from 'react'
import ReactDOM from 'react-dom/client'
import { legacy_createStore as createStore } from 'redux'
import App from './App.jsx'

const noteReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_NOTE': {
      state.push(action.payload)
      return state
    }
    default: {
      return state
    }
  }
}

const store = createStore(noteReducer)

const root = ReactDOM.createRoot(document.getElementById('root'))
const render = () =>
  root.render(
    <React.StrictMode>
      <App store={store} />
    </React.StrictMode>,
  )

render()
store.subscribe(render)
