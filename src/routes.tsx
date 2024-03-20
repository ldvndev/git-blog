import { createBrowserRouter } from 'react-router-dom'
import { DefaultLayout } from './layouts'
import { Blog } from './pages/Blog'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [{ path: '/', element: <Blog /> }],
  },
])
