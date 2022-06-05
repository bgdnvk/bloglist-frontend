import blogService from "../services/blogs";

const ExpandedBlog = ({blog, blogStyle, handleView, likes, setLikes, setBlogs}) => {

    //5.8 is weird, check L11
    const handleLike = async (e) => {
        //debug like a pro
        console.log('like btn pressed');
        console.log('e from the like btn is ', e)

        //add use info to the db, altho it's included in the schema
        //this doesn't make sense as the blog already has a user?
        //so if you like a blog post the user would change?
        //5.8 wut?
        //it works tho
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
            //could implement a way to fetch blogs again so it updates automatically
            //do what's on L49
        } catch(err){
            console.log('error updating after clicking LIKE: ', e)
        }
    }
    //TODO: Show the button for deleting a blog post only if the blog post was added by the user.
    //delete a blog post and update the blog list
    const handleDelete = async (e) => {
        console.log('delete button pressed')
        try{
            if(window.confirm('do you want to delete?')){
                console.log('id to delete is ', blog.id)
                //delete the blog
                await blogService.deleteById(blog.id)
                //fetch all the blogs again
                const newBlogs = await blogService.getAll()
                setBlogs(newBlogs)
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