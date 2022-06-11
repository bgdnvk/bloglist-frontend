import { render, screen } from '@testing-library/react'
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
  const createBlog = jest.fn(e => e.preventDefault())
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
  const blogFormButton = screen.getByText('post blog')
  //   const inputs = screen.getAllByRole('textbox')
  //   await user.type(inputs[0], 'test title')
  //   await user.type(inputs[1], 'test author')
  //   await user.type(inputs[2], 'test.com')
  screen.debug()

  await user.click(blogFormButton)
  expect(createBlog.mock.calls).toHaveLength(1)

})