import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Blog from './Blog'
import HiddenBlog from './HiddenBlog'

const blog = {
  title: 'test blog',
  author: 'test admin',
  likes: 5,
  url: 'www.test.com',
}

test('render blog', () => {

  //   render(<Blog blog={blog}></Blog>)
  //   screen.debug()
  //   const element = screen.getByText('test blog')
  //   expect(element).toBeDefined()

  const { container } = render(<Blog blog={blog}></Blog>)
  const div = container.querySelector('.hiddenBlog')
  screen.debug()

  expect(div).toHaveTextContent('test blog')

})

test('clicking btn HiddenBlog', async () => {

  const mockHandler = jest.fn()

  render(
    <HiddenBlog blog={blog} handleView={mockHandler}></HiddenBlog>
  )

  const user = userEvent.setup()
  const button = screen.getByText('view')
  await user.click(button)

  expect(mockHandler.mock.calls).toHaveLength(1)
})

test('click btn and likes n url shown', async () => {

  const container = render(<Blog blog={blog}></Blog>).container

  const user = userEvent.setup()
  const button = screen.getByText('view')
  await user.click(button)
  const div = container.querySelector('.expandedBlog')
  screen.debug()
  expect(div).toHaveTextContent('www.test.com')
  expect(div).toHaveTextContent('likes 5')

})