import axios from 'axios'
const baseUrl = '/api/blogs'

//promise
// const getAll = () => {
//   const request = axios.get(baseUrl)
//   return request.then(response => response.data)
// }

//async/await
const getAll = async () => {
  const request = await axios.get(baseUrl)

  //sort the data (u can do this on the rq.data tho)
  const dataToSort = request.data
  dataToSort.sort((a, b) => b.likes - a.likes)
  //same memory so it doesn't matter, but better for readability?
  //   return request.data
  return dataToSort
}

//TODO: check token
let token = null
const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const create = async (newObject) => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}
//PUT request for 5.8
const update = async (id, newObject) => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.put(`${baseUrl}/${id}`, newObject, config)

  console.log(`data returned after update call: ${response.data}`)
  return response.data
}

//delete req for 5.10
const deleteById = async (id) => {
  const config = {
    headers: { Authorization: token },
  }
  const req = await axios.delete(`${baseUrl}/${id}`, config)
  return req.data
}

export default { getAll, create, update, deleteById, setToken }
