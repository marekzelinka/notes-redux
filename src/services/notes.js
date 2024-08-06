import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000/notes',
})

export async function getAllNotes() {
  const response = await instance.get('/')
  return response.data
}
