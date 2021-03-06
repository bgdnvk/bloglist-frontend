import React, { useState, useEffect } from 'react'
//services
import blogService from './services/blogs'
//components
import Blog from './components/Blog'
import LoginForm from './components/LoginForm'
import BlogForm from './components/BlogForm'
import Notification from './components/Notification'

const App = () => {
  //blogs data
  const [blogs, setBlogs] = useState([])
  //user form/login
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  //message for notifications
  const [notification, setNotification] = useState(null)

  useEffect(() => {
    blogService.getAll().then((blogs) => setBlogs(blogs))
  }, [])

  //get local token
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
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

      <Notification
        notification={notification}
        setNotification={setNotification}
      ></Notification>

      <LoginForm
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        setUser={setUser}
        user={user}
        setNotification={setNotification}
      ></LoginForm>

      {user && (
        <BlogForm
          blogs={blogs}
          setBlogs={setBlogs}
          setNotification={setNotification}
        ></BlogForm>
      )}

      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} setBlogs={setBlogs} />
      ))}
    </div>
  )
}

export default App
