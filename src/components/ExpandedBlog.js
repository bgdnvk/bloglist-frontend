import blogService from "../services/blogs";

const ExpandedBlog = ({blog, blogStyle, handleView}) => {

    const handleLike = e => {
        console.log('e is ', e)
        console.log('like btn pressed');

        const newBlogObject = {...blog, 'likes': blog.likes+1}
        console.log(newBlogObject)
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