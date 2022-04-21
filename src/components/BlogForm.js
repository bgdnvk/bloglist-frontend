import React from "react"
import blogService from '../services/blogs'

const BlogInput = ({newBlog, setNewBlog, type}) => {


    const handleForm = (e) => {
        const newBlogObject = {...newBlog}
        newBlogObject[type] = e.target.value
        setNewBlog(newBlogObject)
    }

    return(
    <div>
        <p>{type} :</p>
        <input
        type='text'
        value={newBlog.type}
        name={`Blog${type}`}
        onChange={handleForm}
        ></input>
    </div>
    )
}

const BlogForm = ({newBlog, setNewBlog, blogs, setBlogs}) => {
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(newBlog)
        try{
            const createdBlog = await blogService.create(newBlog)
            setBlogs(blogs.concat(createdBlog))
        } catch(e){
            console.log(e)
        }
    }
    return(
        <form onSubmit={handleSubmit}>

            <BlogInput
            newBlog={newBlog}
            setNewBlog={setNewBlog}
            type={'title'}
            ></BlogInput>
            <BlogInput
            newBlog={newBlog}
            setNewBlog={setNewBlog}
            type={'author'}
            ></BlogInput>

            <BlogInput
            newBlog={newBlog}
            setNewBlog={setNewBlog}
            type={'url'}
            ></BlogInput>
            <button type="submit">create blog</button>
        </form>
    )
}

export default BlogForm