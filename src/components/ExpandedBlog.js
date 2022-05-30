import blogService from "../services/blogs";

const ExpandedBlog = ({blog, blogStyle, handleView, likes, setLikes}) => {


    const handleLike = async (e) => {
        //debug like a pro
        console.log('e is ', e)
        console.log('like btn pressed');

        const newBlogObject = {...blog, 'likes': likes+1}
        console.log(newBlogObject)
        //TODO: add user to the DB?
        try{
            await blogService.update(blog.id, newBlogObject)
            setLikes(likes+1)
            console.log('blog likes are ', newBlogObject.likes)
        } catch(err){
            console.log('error updating: ', e)
        }
    }

    const handleDelete = async (e) => {
        //TODO: update blogs
        console.log('delete button pressed')
        try{
            if(window.confirm('do you want to delete?')){
                console.log('id to delete is ', blog.id)
                await blogService.deleteById(blog.id)
            }
        } catch (err) {
            console.log('error deleting: ', err)
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
            <br></br>
            <button onClick={handleDelete}>remove</button>
      </div>
    )
}
export default ExpandedBlog