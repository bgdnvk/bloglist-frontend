import blogService from "../services/blogs";

const ExpandedBlog = ({blog, blogStyle, handleView, likes, setLikes}) => {


    const handleLike = async (e) => {
        //debug like a pro
        console.log('e is ', e)
        console.log('like btn pressed');

        const newBlogObject = {...blog, 'likes': likes+1}
        console.log(newBlogObject)
        //TODO: make the app re-render?
        try{
            await blogService.update(blog.id, newBlogObject)
            setLikes(likes+1)
            console.log('blog likes are ', newBlogObject.likes)
        } catch(err){
            console.log('error updating: ', e)
        }
    }

    return(
        <div style={blogStyle}>
            {blog.title} 
            <br></br>
            {blog.author} 
            <br></br>
            likes {likes} 
            <button onClick={handleLike}>like</button>
            <br></br>
            {blog.url} 
            <br></br>
            <button onClick={handleView}>hide</button>
      </div>
    )
}
export default ExpandedBlog