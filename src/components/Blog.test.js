import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Blog from './Blog'

it.only('render blog', () => {
  const blog = {
    title: 'test blog',
    author: 'test admin',
    likes: 5,
    url: 'www.test-com',
  }

  //   render(<Blog blog={blog}></Blog>)
  //   screen.debug()
  //   const element = screen.getByText('test blog')
  //   expect(element).toBeDefined()

  const { container } = render(<Blog blog={blog}></Blog>)
  const div = container.querySelector('.hiddenBlog')
  screen.debug()

  expect(div).toHaveTextContent('test blog')

})