const BlogInput = ({ newBlog, setNewBlog, type }) => {
  const handleForm = (e) => {
    const newBlogObject = { ...newBlog }
    newBlogObject[type] = e.target.value
    setNewBlog(newBlogObject)
  }

  return (
    <div>
      <p>{type} :</p>
      <input
        type="text"
        value={newBlog.type}
        name={`Blog${type}`}
        onChange={handleForm}
        placeholder={`write ${type} here`}
      ></input>
    </div>
  )
}

export default BlogInput