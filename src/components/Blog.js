import {React, useState} from 'react'



const Blog = ({blog}) => {
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

  //function to view/hide a blog post
  const handleView = e => {
    e.preventDefault()
    setView(!view)
  }
  //
  if(!view) {
    return(
      <div style={blogStyle}>
         {blog.title} 
         {blog.author} 
         <button onClick={handleView}>view</button>
      </div> 
    ) 
  }
  return(
    <div style={blogStyle}>
      {blog.title} 
      {blog.author} 
      {blog.likes} 
      {blog.url} 
      <button onClick={handleView}>hide</button>
    </div>
  )
}

export default Blog