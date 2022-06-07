import {React, useState} from 'react'
import {PropTypes} from 'prop-types'
import ExpandedBlog from './ExpandedBlog'
import HiddenBlog from './HiddenBlog'

const Blog = ({blog, setBlogs}) => {
  //some CSS
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  //flag to show or hide details
  const [view, setView] = useState(false)
  //likes
  const [likes, setLikes] = useState(blog.likes)

  //function to view/hide a blog post
  const handleView = e => {
    e.preventDefault()
    setView(!view)
  }
  //if the state is false hide the blog
  if(!view) {
    return(
      <HiddenBlog
      blog={blog} blogStyle={blogStyle} handleView={handleView}
      ></HiddenBlog>
    )
  }
  return(
    <ExpandedBlog
    blog={blog} blogStyle={blogStyle} 
    handleView={handleView} 
    likes={likes} setLikes={setLikes} 
    setBlogs={setBlogs}
    ></ExpandedBlog>
  )
}

//defining prop types
Blog.propTypes = {
  blog: PropTypes.object,
  setBlogs: PropTypes.func,
}

export default Blog