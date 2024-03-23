import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts'
import { BlogPage } from './pages/blog'
import { Post } from './pages/posts'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<BlogPage />} />
        <Route path="/post/:id" element={<Post />} />
      </Route>
    </Routes>
  )
}
