import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import LoginForm from './components/LoginForm'
import BlogForm from './components/BlogForm'

const App = () => {
  //blogs data
  const [blogs, setBlogs] = useState([])
  //user form/login
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  //blog form
  const [newBlog, setNewBlog] = useState({
    title: '',
    author: '',
    url: ''
  })

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  //get local token
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if(loggedUserJSON) {
      console.log('loggedUserJSON is ', loggedUserJSON)
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      //adding the token
      blogService.setToken(user.token)
    }
  }, [])

  return (
    <div>
      <h2>blogs</h2>
      <LoginForm
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      setUser={setUser}
      user={user}
      ></LoginForm>

      {user 
        && <BlogForm newBlog={newBlog} setNewBlog={setNewBlog}
        blogs={blogs} setBlogs={setBlogs}></BlogForm>}
      

      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
    </div>
  )
}

export default App