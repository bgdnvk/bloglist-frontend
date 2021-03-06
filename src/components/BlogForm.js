import { React, useState } from 'react'
import blogService from '../services/blogs'
import BlogInput from './BlogInput'

//create new blog button
//appears on the first render
//click and the full blogForm appears
const NewBlogButton = ({ setFormVisibility }) => {
  const handleClick = () => {
    setFormVisibility(true)
  }
  return (
    <div>
      <button onClick={handleClick}>create blog</button>
    </div>
  )
}

const BlogForm = ({
  blogs,
  setBlogs,
  setNotification,
  testHandleSubmit
}) => {

  const [newBlog, setNewBlog] = useState({
    title: '',
    author: '',
    url: '',
  })

  //state to hide the blog form with the cancel button and NewLogButton component
  const [formVisibility, setFormVisibility] = useState(false)

  //submit button
  const handleSubmit = async (e) => {
    e.preventDefault()
    // console.log('value of form is ', e.target[0].value)
    console.log(newBlog)
    //---TEST POST FORM---
    if(testHandleSubmit){
      testHandleSubmit({
        testNewBlogPost: newBlog
      })
    }
    //---TEST POST FORM--

    try {
      const createdBlog = await blogService.create(newBlog)
      setBlogs(blogs.concat(createdBlog))
      setNotification({
        text: `a new blog: ${createdBlog.title} by ${createdBlog.author}`,
        type: 'successNotification',
      })
    } catch (e) {
      console.log(e)
    }
  }
  //cancel button
  const handleCancel = async (e) => {
    e.preventDefault()
    setFormVisibility(!formVisibility)
  }
  //check state and if it's false (which should be at the start of the render)
  //show only the button to create a new blog
  if (!formVisibility)
    return (
      <NewBlogButton setFormVisibility={setFormVisibility}></NewBlogButton>
    )
  //return the full blog form
  return (
    <form onSubmit={handleSubmit}>
      <BlogInput
        newBlog={newBlog}
        setNewBlog={setNewBlog}
        type={'title'}
      ></BlogInput>
      <BlogInput
        newBlog={newBlog}
        setNewBlog={setNewBlog}
        type={'author'}
      ></BlogInput>

      <BlogInput
        newBlog={newBlog}
        setNewBlog={setNewBlog}
        type={'url'}
      ></BlogInput>
      <button type="submit">post blog</button>
      <button onClick={handleCancel}>cancel</button>
    </form>
  )
}

export default BlogForm
