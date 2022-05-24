const HiddenBlog = ({blog, blogStyle, handleView}) => {

    return(
        <div style={blogStyle}>
            {blog.title} 
            <br></br>
            {blog.author} 
            <br></br>
            <button onClick={handleView}>view</button>
        </div>
    )
}

export default HiddenBlog