import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import BlogForm from './BlogForm'
import userEvent from '@testing-library/user-event'

test('<BlogForm/> update', async () => {

  const newBlog = {
    title:'test blog',
    author: 'test author',
    url: 'test.com'
  }
  //prevent default for
  //https://stackoverflow.com/questions/62216232/error-not-implemented-htmlformelement-prototype-submit
  const createBlog = jest.fn()
  const user = userEvent.setup()

  render(<BlogForm newBlog={newBlog} testHandleSubmit={createBlog}>
  </BlogForm>)
  screen.debug()

  //   const inputs = screen.getAllByRole('textbox')
  const createBlogButton = screen.getByText('create blog')

  //   await user.type(inputs[0], 'test title')
  //   await user.type(inputs[1], 'test author')
  //   await user.type(inputs[2], 'test.com')
  await user.click(createBlogButton)
  screen.debug()

  //   expect(screen.queryByText('title :')).toBeInTheDocument()

  //   expect(createBlog.mock.calls).toHaveLength(1)
  //   expect(createBlog.mock.calls[0][0].content).toBe('test title')
  //inputs probs wrong?
  const inputs = screen.getAllByRole('textbox')
  await user.type(inputs[0], 'new title')
  await user.type(inputs[1], 'new author')
  await user.type(inputs[2], 'new test')

  const blogFormButton = screen.getByText('post blog')
  // fireEvent.change(inputs[0], { target:
  //    { value: 'fire' } })

  // const inputTitle = screen.getByPlaceholderText('write title here')
  // await user.type(inputTitle, 'text goes here')

  // const input1 = screen.getByRole('textbox')
  // await user.type(input1, 'test title goes here')
  screen.debug(inputs[0])

  await user.click(blogFormButton)

  //https://stackoverflow.com/questions/51418086/jest-expected-mock-function-to-have-been-called-but-it-was-not-called
  // console.log(createBlog.mock.calls[0][0].target)
  // console.log(createBlog.mock.results)

  console.log(createBlog.mock.calls[0][0].testNewBlogPost)
  const blogPostForm = createBlog.mock.calls[0][0].testNewBlogPost


  waitFor(() => {
    expect(inputs[0].value).toBe('new title')
    expect(inputs[1].value).toBe('new author')
    expect(inputs[2].value).toBe('new test')

    expect(createBlog.mock.calls).toHaveLength(1)

    expect(blogPostForm.title).toBe('new title')
    expect(blogPostForm.author).toBe('new author')
    expect(blogPostForm.url).toBe('new test')
  })

  // expect(createBlog.mock.calls[0][0].content).toBe('test title')

})