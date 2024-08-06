import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000/notes',
})

export async function getAllNotes() {
  const response = await instance.get('/')
  return response.data
}

export async function createNote(content) {
  const noteObject = { content, important: false }
  const response = await instance.post('/', noteObject)
  return response.data
}

export async function updateNote(id, updates) {
  const response = await instance.put(`/${id}`, updates)
  return response.data
}
