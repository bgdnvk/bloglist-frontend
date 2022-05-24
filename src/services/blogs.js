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
  console.log(request)
  return request.data
}

//TODO: check token
let token = null
const setToken = newToken => {
    token = `bearer ${newToken}`
}

const create = async newObject => {
    const config = {
        headers: {Authorization: token},
    }
    const response = await axios.post(baseUrl, newObject, config)
    return response.data
}
//PUT request for 5.8
const update = async (id, newObject) => {
    const config = {
        headers: {Authorization: token},
    }
    const response = 
            await axios.put(`${baseUrl}/${id}`, newObject, config)
            
    console.log(`data returned after update call: ${response.data}`)
    return response.data
}


export default { getAll, create, update, setToken }