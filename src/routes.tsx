import { createBrowserRouter } from 'react-router-dom'
import { DefaultLayout } from './layouts'
import { BlogPage } from './pages/blog'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [{ path: '/', element: <BlogPage /> }],
  },
])
