import React from "react"

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

const BlogForm = ({newBlog, setNewBlog}) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(newBlog)
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