import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import HiddenBlog from './HiddenBlog'

test('renders content', () => {
  const hiddenBlog = {
    title: 'test blog',
    author: 'TestAdmin',
  }

  render(<HiddenBlog blog={hiddenBlog}></HiddenBlog>)
  const element = screen.getByText('test blog')
  expect(element).toBeDefined()
})