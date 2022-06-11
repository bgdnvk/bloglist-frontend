import blogService from '../services/blogs'

const ExpandedBlog = ({
  blog,
  blogStyle,
  handleView,
  likes,
  setLikes,
  setBlogs,
  testLikeHandle
}) => {
  //get user credentials stored in localstorage
  const getUserJson = () => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    const user = JSON.parse(loggedUserJSON)
    return user
  }
  //check if the blog has the same user as the logged user: L104
  const checkBlogPertainsUser = () => {
    const { username, name } = getUserJson()
    const blogUserName = blog.user.username
    const blogName = blog.user.name
    if (username === blogUserName && name === blogName) {
      return true
    } else {
      return false
    }
  }

  //----debug like a pro----
  // console.log('blog is', blog)

  // const {username, name} = getUserJson()
  // console.log('user is ', getUserJson())
  // console.log('username is ', username)
  // console.log('name is ', name)

  // const blogUserName = blog.user.username
  // const blogName = blog.user.name
  // console.log('blogUserName is ', blogUserName)
  // console.log('blogName is ', blogName)

  // console.log(checkBlogPertainsUser())
  // ----

  //5.8 is weird, check L45
  const handleLike = async (e) => {
    //debug like a pro
    console.log('like btn pressed')
    // console.log('e from the like btn is ', e)

    //add use info to the db, altho it's included in the schema
    //this doesn't make sense as the blog already has a user?
    //so if you like a blog post the user would change?
    //5.8 wut?
    //it works tho
    //user interfers with tests
    const user = getUserJson()
    // console.log('loggedUserJSON is ', user)
    // console.log('user is: ', user)
    //new object to update in the db
    const newBlogObject = {
      ...blog,
      //TODO: check front, disabled user for tests
      user: {
        username: user.username,
        name: user.name,
      },
      likes: likes + 1,
    }

    try {
      // console.log('--------------------tested BEFORE service--------------')
      await blogService.update(blog.id, newBlogObject)
      setLikes(likes + 1)
      // console.log('--------------------tested after service--------------')
      console.log('blog likes are ', newBlogObject.likes)
      console.log('newBlogOnject after clicking like ', newBlogObject)
      //could implement a way to fetch blogs again so it updates automatically
      //do what's on L82
    } catch (err) {
      console.log('error updating after clicking LIKE: ', e)
    }
  }

  //delete a blog post and update the blog list
  // eslint-disable-next-line no-unused-vars
  const handleDelete = async (e) => {
    console.log('delete button pressed')
    try {
      if (window.confirm('do you want to delete?')) {
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

  return (
    <div style={blogStyle} className='expandedBlog'>
      <p>{blog.title}</p>
      <br></br>
      <p>{blog.author}</p>
      <br></br>
      <p>likes {likes}</p>
      <button onClick={ testLikeHandle || handleLike } id='likeButton'>like</button>
      <br></br>
      <p>{blog.url}</p>
      <br></br>
      <button onClick={handleView}>hide</button>
      <br></br>
      {checkBlogPertainsUser && <button onClick={handleDelete}>remove</button>}
    </div>
  )
}
export default ExpandedBlog
