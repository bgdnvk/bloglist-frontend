import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Blog from './Blog'
import ExpandedBlog from './ExpandedBlog'

describe('<Blog/>', () => {

  let container

  const blog = {
    title: 'test blog',
    author: 'test admin',
    likes: 5,
    url: 'www.test.com',
  }

  beforeEach(() => {
    container = render(<Blog blog={blog}></Blog>).container
  })

  afterAll(cleanup)



  test('5.13: render blog', () => {

    //   render(<Blog blog={blog}></Blog>)
    //   screen.debug()
    //   const element = screen.getByText('test blog')
    //   expect(element).toBeDefined()

    // const { container } = render(<Blog blog={blog}></Blog>)
    const div = container.querySelector('.hiddenBlog')
    screen.debug()

    expect(div).toHaveTextContent('test blog')

  })

  test('5.14: click button then likes and url are shown', async () => {

    // const container = render(<Blog blog={blog}></Blog>).container

    const user = userEvent.setup()
    const button = screen.getByText('view')
    await user.click(button)
    const div = container.querySelector('.expandedBlog')
    screen.debug()
    expect(div).toHaveTextContent('www.test.com')
    expect(div).toHaveTextContent('likes 5')

  })

  test('5.15: like button is clicked twice', async () => {

    const mockHandler = jest.fn()
    const user = userEvent.setup()

    const blog1 = {
      title: 'test blog',
      author: 'test admin',
      likes: 5,
      url: 'www.test.com',
    }
    // const { container } = render( <ExpandedBlog blog={blog1} likes={1} testLikeHandle={mockHandler}></ExpandedBlog>)
    // const likeButton = getByTestId(container, 'likeButton')
    render( <ExpandedBlog blog={blog1} likes={1} testLikeHandle={mockHandler}></ExpandedBlog>)

    screen.debug()

    const likeButton = screen.getByText('like')
    await user.dblClick(likeButton)
    screen.debug()
    expect(mockHandler).toHaveBeenCalledTimes(2)

    // await waitFor(() => {
    //   // expect(screen.getByText('likes 2')).toBeInTheDocument()
    //   expect(likeButton).toHaveBeenCalled()
    // })


    // const container = render(
    //   <ExpandedBlog blog={blog1}></ExpandedBlog>
    // ).container
    // const likeButton  = screen.getByRole('button',{ name: 'like' })
    // fireEvent.click(likeButton)
    // expect(screen.getByText('likes 1')).toBeInTheDocument()


    // const button = screen.getByText('hide')
    // const button = container.querySelector('#likeButton')
    // await user.click(button)
    // // fireEvent.click(button)
    // screen.debug()
    // expect(mockHandler.mock.calls).toHaveLength(1)
    // expect(button).toBeDefined()
    // expect(screen.queryByText('likes 1')).toBeInTheDocument()
    // expect(button).toHaveBeenCalled()
  })

})