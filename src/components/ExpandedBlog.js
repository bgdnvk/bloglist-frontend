const ExpandedBlog = ({blog, blogStyle, handleView}) => {

    const handleLike = e => {
        console.log('like btn pressed');
    }

    return(
        <div style={blogStyle}>
            {blog.title} 
            <br></br>
            {blog.author} 
            <br></br>
            {blog.likes} 
            <button onClick={handleLike}>like</button>
            <br></br>
            {blog.url} 
            <br></br>
            <button onClick={handleView}>hide</button>
      </div>
    )
}
export default ExpandedBlog