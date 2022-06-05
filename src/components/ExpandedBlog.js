import blogService from "../services/blogs";

const ExpandedBlog = ({blog, blogStyle, handleView, likes, setLikes}) => {


    const handleLike = async (e) => {
        //debug like a pro
        console.log('like btn pressed');
        console.log('e from the like btn is ', e)

        //add use info to the db, altho it's included in the schema
        const loggedUserJSON = window.localStorage.getItem('loggedUser')
        const user = JSON.parse(loggedUserJSON)
        console.log('loggedUserJSON is ', user)
        console.log('user is: ', user)
        //new object to update in the db
        const newBlogObject = {
            ...blog,
            'user': {
                'username': user.username,
                'name': user.name,
            }, 
            'likes': likes+1}

        try{
            await blogService.update(blog.id, newBlogObject)
            setLikes(likes+1)
            console.log('blog likes are ', newBlogObject.likes)
            console.log('newBlogOnject after clicking like ', newBlogObject)
        } catch(err){
            console.log('error updating after clicking LIKE: ', e)
        }
    }

    const handleDelete = async (e) => {
        //TODO: update blogs
        console.log('delete button pressed')
        try{
            if(window.confirm('do you want to delete?')){
                console.log('id to delete is ', blog.id)
                await blogService.deleteById(blog.id)
                //TODO: function to update/render blogs again
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