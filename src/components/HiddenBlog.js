const HiddenBlog = ({ blog, blogStyle, handleView }) => {

  return(
    <div style={blogStyle} className='hiddenBlog'>
      <p>{blog.title}</p>
      <br></br>
      <p>{blog.author}</p>
      <br></br>
      <button onClick={handleView}>view</button>
    </div>
  )
}

export default HiddenBlog