import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import BlogForm from './BlogForm'
import userEvent from '@testing-library/user-event'

test('<BlogForm/> event handler receives the props with the data', async () => {
  //pass the new blog to the form
  const newBlog = {
    title:'test blog',
    author: 'test author',
    url: 'test.com'
  }
  //prevent default for
  //https://stackoverflow.com/questions/62216232/error-not-implemented-htmlformelement-prototype-submit
  //define function and user
  const createBlog = jest.fn()
  const user = userEvent.setup()

  render(<BlogForm newBlog={newBlog} testHandleSubmit={createBlog}>
  </BlogForm>)
  screen.debug()
  //the blogform is hidden at first
  const createBlogButton = screen.getByText('create blog')
  //open the blog form
  await user.click(createBlogButton)
  screen.debug()

  //   expect(screen.queryByText('title :')).toBeInTheDocument()

  //get all the inputs from the form
  const inputs = screen.getAllByRole('textbox')
  await user.type(inputs[0], 'new title')
  await user.type(inputs[1], 'new author')
  await user.type(inputs[2], 'new test')
  //after typing send the form, we catch this with createBlog func
  //with the testHandleSubmit prompt
  const blogFormButton = screen.getByText('post blog')

  // fireEvent.change(inputs[0], { target:
  //    { value: 'fire' } })
  // const inputTitle = screen.getByPlaceholderText('write title here')

  //the written text doesn't appear here, can ignore
  screen.debug(inputs[0])

  //click the form button
  await user.click(blogFormButton)

  //https://stackoverflow.com/questions/51418086/jest-expected-mock-function-to-have-been-called-but-it-was-not-called
  // console.log(createBlog.mock.calls[0][0].target)
  // console.log(createBlog.mock.results)

  //the information passed to handleSubmit prop
  //with the createBlog mock function
  //is an object where you can access the newBlog data
  //by using .testNewBlogPost
  console.log(createBlog.mock.calls[0][0].testNewBlogPost)
  //get the data
  const blogPostForm = createBlog.mock.calls[0][0].testNewBlogPost


  waitFor(() => {
    //check the inputs are written
    expect(inputs[0].value).toBe('new title')
    expect(inputs[1].value).toBe('new author')
    expect(inputs[2].value).toBe('new test')
    //check the button is clicked
    expect(createBlog.mock.calls).toHaveLength(1)
    //check the post form is getting all our data
    //when we click on the 'post a blog' button
    expect(blogPostForm.title).toBe('new title')
    expect(blogPostForm.author).toBe('new author')
    expect(blogPostForm.url).toBe('new test')
  })

})