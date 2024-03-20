import { createBrowserRouter } from 'react-router-dom'
import { DefaultLayout } from './layouts'
import { BlogPage } from './pages/blog'
import { Post } from './pages/posts'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [{ path: '/', element: <BlogPage /> }],
  },
  {
    path: '/',
    element: <DefaultLayout />,
    children: [{ path: '/post/:id', element: <Post /> }],
  },
])
