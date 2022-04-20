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

export default { getAll }